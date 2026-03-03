FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "npm","run","start" ]