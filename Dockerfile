FROM node:15

COPY . /app

WORKDIR /app

RUN yarn build