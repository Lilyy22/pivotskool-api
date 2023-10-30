FROM node:alpine
WORKDIR /landing-api

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

CMD ["npm", "start"]