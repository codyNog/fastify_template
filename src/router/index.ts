import { FastifyInstance } from "fastify";
import { indexController } from "../controller/index";

export const router = async (fastify: FastifyInstance) => {
  fastify.register(indexController);
};
