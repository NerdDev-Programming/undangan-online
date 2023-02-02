import { PrismaClient } from "@prisma/client";

const dataMempelai = {
	id: "ADFAHA",
	nama_mempelai: "Andi dan Rita",
};

const env = process.env.NODE_ENV;

const options = {
	datasources:
		env === "production"
			? { db: { url: process.env.DATABASE_PROD } }
			: { db: { url: process.env.DATABASE_DEV } },
};

const prisma = new PrismaClient(options);

async function main() {
	const cek = await prisma.mempelai.create({
		data: {
			id: dataMempelai.id,
			nama_mempelai: dataMempelai.nama_mempelai,
		},
	});
	console.log(`cek data : ${cek}`);
}

main()
	.then(async () => {
		console.log("successfully seeding database!");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
