import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@prismaDb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") {
		// ambil data chat
	} else if (req.method === "POST") {
		// kirim chat
	} else {
		return res.status(401).json({
			mesasge: "not supported yet!",
		});
	}
}
