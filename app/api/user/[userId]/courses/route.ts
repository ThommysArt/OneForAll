import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const db = new PrismaClient()
    try{
        if (req.method === "GET") {
            const course = await db.userCourse.findMany({
                where: {
                    userId: req.query.userId!.toString()
                }
            })
            return res.status(200).json(course)
        } else if (req.method === "POST") {
            const course = await db.userCourse.create({
                data: {
                    userId: req.query.userId!.toString(),
                    courseId: req.body.courseId
                }
            })
            return res.status(201).json(course)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}