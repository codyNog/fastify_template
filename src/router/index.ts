import { FastifyInstance } from "fastify";

export const router = async (fastify: FastifyInstance) => {
  fastify.get("/", async (_request, reply) => {
    reply.send({ hello: "world" });
  });
};
