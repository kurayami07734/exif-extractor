FROM node:lts-alpine3.20

COPY ./package*.json ./

RUN npm ci

COPY ./src ./src

CMD [ "npm", "start" ]