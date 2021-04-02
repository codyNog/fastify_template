import fastify from "fastify";
import { router } from "./router";

const server = fastify({ logger: true });

server.register(router);

export default server;
