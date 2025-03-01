FROM node:22.14.0-alpine

WORKDIR /usr/src/app

COPY src/app/package.json /usr/src/app
RUN npm install

COPY ./src/app /usr/src/app

EXPOSE 3000

CMD ["node", "server.js"]
