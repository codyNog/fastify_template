FROM node:14-alpine AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

EXPOSE 8080

CMD ["node_modules/.bin/ts-node-dev", "src/index.ts"]