import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
// const client = new PrismaClient({ log: ["query"] });
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;