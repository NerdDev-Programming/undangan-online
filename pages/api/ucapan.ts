import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@prismaDb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		try {
			const { id, message, nama } = req.body;

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

			await prisma.chat.create({
				data: {
					nama: nama as string,
					chat: message as string,
					id_mempelai: id as string,
				},
			});

			return res.status(200).json({
				message: "success",
			});
		} catch (err) {
			console.log(`error send data : ${err.message}`);
			return res.status(500).json({
				message: "error while send data",
			});
		}
	} else {
		return res.status(401).json({
			message: "not supported yet",
		});
	}
}
