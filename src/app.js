import Fastify from "fastify";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";
import { prismaPlugin } from "./plugins/prisma.js";

export async function buildApp() {
    const app = Fastify({
        logger: true
    });

    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    app.register(prismaPlugin);

    return app;
}