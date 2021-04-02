FROM node:14-alpine AS deps

WORKDIR /opt/app
COPY . .
RUN yarn install

EXPOSE 8080

CMD ["node_modules/.bin/nodemon", "-L"]