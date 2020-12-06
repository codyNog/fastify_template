import { FastifyInstance } from "fastify";
import { indexController } from "../controller/index";
import { usersController } from "../controller/users";

export const router = async (fastify: FastifyInstance) => {
  fastify.register(indexController);
  fastify.register(usersController);
};
