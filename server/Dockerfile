FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 5000

CMD ["yarn", "server"]