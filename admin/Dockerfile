FROM node:slim as febuilder

WORKDIR /adminfe
COPY ./adminfe/package.json ./package.json
RUN yarn install
COPY ./adminfe .
RUN yarn run build

FROM node:slim
WORKDIR /app
COPY ./adminbe/package.json ./package.json
RUN yarn install
COPY ./adminbe .
RUN ls -la
COPY --from=febuilder /adminfe/build ./build
ENV DB_URI=mongodb+srv://u4t_admin:Aa123456@u4t-um4ov.gcp.mongodb.net/u4t?retryWrites=true&w=majority
EXPOSE 8080
ENTRYPOINT yarn start