import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const quizId = parseInt(req.query.quizId as string);
        const questionId = parseInt(req.query.questionId as string);

        if (req.method === "GET") {
            const question = await db.question.findUnique({
                where: { id: questionId, quizId }
            });
            if (!question) {
                return res.status(404).json({ error: 'Question not found' });
            }
            return res.status(200).json(question);
        } else if (req.method === "PATCH") {
            const { label } = req.body;
            const updatedQuestion = await db.question.update({
                where: { id: questionId, quizId },
                data: { label }
            });
            return res.status(200).json(updatedQuestion);
        } else if (req.method === "DELETE") {
            await db.question.delete({
                where: { id: questionId, quizId }
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
