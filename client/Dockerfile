FROM node:14-slim

RUN mkdir -p /usr/src/app


WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]