FROM node:slim as febuilder

WORKDIR /client
COPY ./client/package.json ./package.json
RUN yarn install
COPY ./client .
RUN yarn run build

FROM node:slim
WORKDIR /app
COPY ./server/package.json ./package.json
RUN yarn install
COPY ./server .
RUN ls -la
COPY --from=febuilder /client/build ./build
ENV DB_URI=mongodb+srv://u4t_admin:Aa123456@u4t-um4ov.gcp.mongodb.net/u4t?retryWrites=true&w=majority
EXPOSE 8080
ENTRYPOINT yarn start
