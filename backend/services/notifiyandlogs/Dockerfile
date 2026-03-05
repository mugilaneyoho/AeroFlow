FROM node:20

WORKDIR /

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "node","dist/main.js" ]