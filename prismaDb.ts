import { PrismaClient } from "@prisma/client";

// declare global {
// 	var prisma: PrismaClient | undefined;
// }

const env = process.env.NODE_ENV;

const options = {
	datasources:
		env === "production"
			? { db: { url: process.env.DATABASE_PROD } }
			: { db: { url: process.env.DATABASE_DEV } },
};

console.log(options);

const client = new PrismaClient(options);
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
