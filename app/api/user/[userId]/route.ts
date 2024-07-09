import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const db = new PrismaClient()
        if (req.method === "GET") {
            const userId = req.query.userId!.toString()
            const users = await db.user.findUnique({
                where: { userId }
            })
            return res.status(200).json(users)
        } else if (req.method === "PATCH") {
            const userId = req.query.userId!.toString()
            const users = await db.user.update({
                where: { userId },
                data: {
                    fullname: req.body.fullname
                }
            })
            return res.status(200).json(users)
        } else if (req.method === "DELETE") {
            const userId = req.query.userId!.toString()
            const users = await db.user.delete({
                where: { userId }
            })
            return res.status(200).json(users)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}