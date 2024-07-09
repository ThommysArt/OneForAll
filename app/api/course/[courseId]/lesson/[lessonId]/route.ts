import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const lessonId = parseInt(req.query.lessonId as string);

        if (req.method === "GET") {
            const lesson = await db.lesson.findUnique({
                where: { id: lessonId, courseId }
            });
            if (!lesson) {
                return res.status(404).json({ error: 'Lesson not found' });
            }
            return res.status(200).json(lesson);
        } else if (req.method === "PATCH") {
            const { title, content } = req.body;
            const updatedLesson = await db.lesson.update({
                where: { id: lessonId, courseId },
                data: { title, content }
            });
            return res.status(200).json(updatedLesson);
        } else if (req.method === "DELETE") {
            await db.lesson.delete({
                where: { id: lessonId, courseId }
            });
            return res.status(204).end();
        } else {
            res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
