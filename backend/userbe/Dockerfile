FROM node:slim

ENV NODE_ENV=production 

WORKDIR /backend/userbe/

ADD package.json .

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]

