FROM node:slim as febuilder

WORKDIR /userfe
COPY ./userfe/package.json ./package.json
RUN yarn install
COPY ./userfe .
RUN yarn run build

FROM node:slim
WORKDIR /app
COPY ./userbe/package.json ./package.json
RUN yarn install
COPY ./userbe .
RUN ls -la
COPY --from=febuilder /userfe/build ./build
ENV DB_URI=mongodb+srv://u4t_admin:Aa123456@u4t-um4ov.gcp.mongodb.net/u4t?retryWrites=true&w=majority
EXPOSE 8080
ENTRYPOINT yarn start