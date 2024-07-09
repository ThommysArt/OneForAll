import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const quizId = parseInt(req.query.quizId as string);
        const questionId = parseInt(req.query.questionId as string);

        if (req.method === "POST") {
            const { label, isCorrect } = req.body;
            const option = await db.option.create({
                data: {
                    label,
                    isCorrect,
                    questionId
                }
            });
            return res.status(201).json(option);
        } else if (req.method === "GET") {
            const options = await db.option.findMany({
                where: { questionId }
            });
            return res.status(200).json(options);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
