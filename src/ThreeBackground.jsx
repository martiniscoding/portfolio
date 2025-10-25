import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 8;

    const getDimensions = () => {
      const el = mountRef.current;
      if (!el) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      const { width, height } = el.getBoundingClientRect();
      return {
        width: Math.max(1, width),
        height: Math.max(1, height),
      };
    };

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    const { width: initialWidth, height: initialHeight } = getDimensions();
    camera.aspect = initialWidth / initialHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(initialWidth, initialHeight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xff77ff, 2);
    key.position.set(3, 3, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8844ff, 1.5);
    rim.position.set(-4, -3, -3);
    scene.add(rim);

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );

    const geometry = new THREE.TorusKnotGeometry(1.3, 0.4, 220, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x9b5cf6,
      metalness: 0.5,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      envMapIntensity: 1.5,
      emissive: new THREE.Color(0x9b5cf6),
      emissiveIntensity: 0.6,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(initialWidth, initialHeight),
      1.3,
      0.6,
      0.1
    );
    composer.addPass(bloom);
    composer.setSize(initialWidth, initialHeight);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mesh.rotation.y += (mouse.x * 0.6 - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (-mouse.y * 0.4 - mesh.rotation.x) * 0.05;
      mesh.rotation.y += Math.sin(t * 0.3) * 0.002;
      mesh.rotation.x += Math.cos(t * 0.2) * 0.002;

      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      composer.render();
    };
    animate();

    const resizeScene = () => {
      const { width, height } = getDimensions();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    resizeScene();
    window.addEventListener("resize", resizeScene);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => resizeScene());
      resizeObserver.observe(mountRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resizeScene);

      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none bg-linear-to-b from-[#120020] to-[#040010]"
    />
  );
}
