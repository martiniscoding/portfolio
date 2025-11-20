FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm i
CMD [ "npm" ,"run","dev" ]



