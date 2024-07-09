import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const quizId = parseInt(req.query.quizId as string);
        const questionId = parseInt(req.query.questionId as string);
        const optionId = parseInt(req.query.optionId as string);

        if (req.method === "GET") {
            const option = await db.option.findUnique({
                where: { id: optionId, questionId }
            });
            if (!option) {
                return res.status(404).json({ error: 'Option not found' });
            }
            return res.status(200).json(option);
        } else if (req.method === "PATCH") {
            const { label, isCorrect } = req.body;
            const updatedOption = await db.option.update({
                where: { id: optionId, questionId },
                data: { label, isCorrect }
            });
            return res.status(200).json(updatedOption);
        } else if (req.method === "DELETE") {
            await db.option.delete({
                where: { id: optionId, questionId }
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
