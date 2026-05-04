import dotenv from "dotenv"
dotenv.config()

// ---------- SERVER ----------
export const HOST = process.env.HOST || "0.0.0.0";
export const PORT = process.env.PORT || 7070;

