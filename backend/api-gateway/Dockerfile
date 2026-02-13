FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3001

CMD [ "npm","run","start" ]