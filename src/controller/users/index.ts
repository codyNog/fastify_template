import { FastifyInstance } from "fastify";
import { User } from "../../types/user";

const USERS = "/users";

export const usersController = async (fastify: FastifyInstance) => {
  const collection = fastify.mongo.db.collection("user");

  fastify.get(USERS, async () => {
    const result: User[] = await collection.find().toArray();

    return result;
  });

  fastify.post(USERS, async (request) => {
    await collection.insertOne(request.body);
  });
};
