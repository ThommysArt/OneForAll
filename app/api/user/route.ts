import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const db = new PrismaClient()
        if (req.method === "POST") {
            const user = await db.user.create({
                data: {
                    userId: req.body.userId,
                    fullname: req.body.fullname
                }
            })
            return res.status(201).json(user)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}