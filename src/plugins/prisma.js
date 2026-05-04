import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["error", "warn"]
});

export async function prismaPlugin(fastify) {
    try {
        await prisma.$connect();
    } catch (error) {
        fastify.log.error("Failed to connect to the database: ", error);
    }

    fastify.decorate("fastify", fastify);

    fastify.addHook("onClose", async (instance) => {
        await instance.prisma.$disconnect();
    });
}

export default fp(prismaPlugin);