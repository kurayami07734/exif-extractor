FROM node:lts-alpine3.20

COPY package*.json ./

RUN npm ci

COPY ./src ./src

COPY ./images ./tmp

CMD [ "npm", "start" ]