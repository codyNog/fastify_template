import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

const connector = async (fastify: FastifyInstance) => {};

export const dbConnector = fastifyPlugin(connector);
