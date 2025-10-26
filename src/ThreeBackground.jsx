import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05040a, 0.08);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    Object.assign(renderer.domElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    });
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.8,
      0.5,
      0.0
    );
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

 
    const points = [];
    const radius = 2.0;
    const segments = 300;
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      const y = 0.35 * Math.sin(t * 3.5) + 0.2 * Math.sin(t * 7.5);
      const rOffset =
        0.25 * Math.sin(t * 2.3) * Math.cos(t * 1.7 + 0.8) +
        0.12 * Math.sin(t * 6.0 + 1.3);
      points.push(
        new THREE.Vector3(
          x + rOffset * Math.cos(t),
          y,
          z + rOffset * Math.sin(t)
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points, true);
    const geometry = new THREE.TubeGeometry(curve, 1200, 0.15, 48, true);

    const uniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xd77bff) },
      uLightDir: { value: new THREE.Vector3(0, 0, 1) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vNormal = normalMatrix * normal;
          vec3 pos = position + normal * sin((position.y + uTime) * 3.0) * 0.06;
          vPos = (modelMatrix * vec4(pos, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uLightDir;
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec2 vUv;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        void main() {
          vec3 N = normalize(vNormal);
          vec3 L = normalize(uLightDir);
          vec3 V = normalize(cameraPosition - vPos);
          float diff = max(dot(N, L), 0.0);
          float rim = pow(1.0 - dot(N, V), 2.5);

          float n = noise(vUv * 14.0 + vPos.xy * 0.1);
          float roughMask = smoothstep(0.3, 0.8, n);
          float surface = mix(0.25, 1.0, roughMask);

          vec3 color = uColor * (0.4 + diff * 0.8 + rim * 1.2) * surface;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const tube = new THREE.Mesh(geometry, material);
    tube.rotation.x = Math.PI / 2;
    scene.add(tube);

    
    const starGeom = new THREE.BufferGeometry();
    const starCount = 600;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 20 * Math.random();
      const phi = Math.random() * 2 * Math.PI;
      const cost = Math.random() * 2 - 1;
      const sint = Math.sqrt(1 - cost * cost);
      starPos[i * 3] = r * sint * Math.cos(phi);
      starPos[i * 3 + 1] = r * sint * Math.sin(phi);
      starPos[i * 3 + 2] = r * cost;
    }
    starGeom.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeom,
      new THREE.PointsMaterial({
        color: 0x9c77ff,
        size: 0.02,
        opacity: 0.35,
        transparent: true,
      })
    );
    scene.add(stars);

    const clock = new THREE.Clock();

    const updateSize = () => {
      const { width, height } = container.getBoundingClientRect();
      const safeWidth = width || window.innerWidth;
      const safeHeight = height || window.innerHeight;

      if (safeWidth < 640) {
        camera.position.z = 8;
        tube.scale.set(0.7, 0.7, 0.7);
      } else if (safeWidth < 1024) {
        camera.position.z = 6.5;
        tube.scale.set(0.85, 0.85, 0.85);
      } else {
        camera.position.z = 5;
        tube.scale.set(1, 1, 1);
      }

      renderer.setSize(safeWidth, safeHeight, false);
      composer.setSize(safeWidth, safeHeight);
      bloomPass.setSize(safeWidth, safeHeight);

      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
    };

    updateSize();
    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateSize())
        : null;
    if (resizeObserver) resizeObserver.observe(container);

    const mouse = new THREE.Vector2(0, 0);
    const targetBloom = { strength: 0.8 };
    const currentBloom = { strength: 0.8 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = (event.clientX - rect.width / 2) / rect.width;
      mouse.y = (event.clientY - rect.height / 2) / rect.height;

      
      const distance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
      const glowBoost = 1.0 + (1.0 - Math.min(distance * 2, 1.0)) * 0.8; 
      targetBloom.strength = 0.8 * glowBoost;
    };

    window.addEventListener("mousemove", handleMouseMove);

    
    function animate() {
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t * 0.6;

      
      currentBloom.strength +=
        (targetBloom.strength - currentBloom.strength) * 0.05;
      bloomPass.strength = currentBloom.strength;

      composer.render();
      requestAnimationFrame(animate);
    }

    animate();

 
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-x-0 top-0 bottom-0 z-0 pointer-events-auto overflow-hidden"
    ></div>
  );
}
