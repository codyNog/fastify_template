import { FastifyInstance } from "fastify";
import fastifyMongodb from "fastify-mongodb";
import fastifyPlugin from "fastify-plugin";

const connector = async (fastify: FastifyInstance) => {
  fastify.register(fastifyMongodb, {
    forceClose: true,
    url: "mongodb://localhost:27017/local",
  });
};

export const dbConnector = fastifyPlugin(connector);
