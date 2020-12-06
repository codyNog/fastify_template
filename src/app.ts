import fastify from "fastify";
import { dbConnector } from "./db/connector";
import { router } from "./router";

const server = fastify({ logger: true });

server.register(dbConnector);
server.register(router);

export default server;
