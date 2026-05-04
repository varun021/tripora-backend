import { buildApp } from "./app.js";
import { HOST, PORT } from "./config/env.js";

const app = await buildApp();

const start = async () => {
    try {
        app.listen({ host: HOST, port: PORT });
        console.log(`Server listening on ${HOST}:${PORT}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

start();