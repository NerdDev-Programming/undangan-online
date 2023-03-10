import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@prismaDb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		try {
			const { id } = req.body;

			const cekData = await prisma.mempelai.findFirst({
				where: {
					id: id,
				},
			});

			if (!cekData) {
				return res.status(404).json({
					message: "data tidak ada",
				});
			}

			const data = await prisma.chat.findMany({
				where: {
					id_mempelai: id,
				},
				select: {
					nama: true,
					chat: true,
				},
			});

			return res.status(200).json({
				message: "successfully get data",
				data: data,
			});
		} catch (err) {
			console.log(`error get data : ${err.message}`);
			return res.status(500).json({
				message: "error while get data",
			});
		}
	} else {
		return res.status(401).json({
			message: "not supported yet",
		});
	}
}
