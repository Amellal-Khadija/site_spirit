# Image de dev : lance `next dev` avec rechargement à chaud, pour travailler en local via Docker.
FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
