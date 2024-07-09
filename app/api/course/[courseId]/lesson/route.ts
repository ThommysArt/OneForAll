import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);

        if (req.method === "POST") {
            const { title, content } = req.body;
            const lesson = await db.lesson.create({
                data: {
                    title,
                    content,
                    courseId
                }
            });
            return res.status(201).json(lesson);
        } else if (req.method === "GET") {
            const lessons = await db.lesson.findMany({
                where: { courseId }
            });
            return res.status(200).json(lessons);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
