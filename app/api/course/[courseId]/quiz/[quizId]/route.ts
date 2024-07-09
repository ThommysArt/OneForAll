import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const quizId = parseInt(req.query.quizId as string);

        if (req.method === "GET") {
            const quiz = await db.quiz.findUnique({
                where: { id: quizId, courseId }
            });
            if (!quiz) {
                return res.status(404).json({ error: 'Quiz not found' });
            }
            return res.status(200).json(quiz);
        } else if (req.method === "PATCH") {
            const { title } = req.body;
            const updatedQuiz = await db.quiz.update({
                where: { id: quizId, courseId },
                data: { title }
            });
            return res.status(200).json(updatedQuiz);
        } else if (req.method === "DELETE") {
            await db.quiz.delete({
                where: { id: quizId, courseId }
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
