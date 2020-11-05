FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app

RUN npm i

COPY . /usr/src/app

EXPOSE 80

CMD ['node','app.js']