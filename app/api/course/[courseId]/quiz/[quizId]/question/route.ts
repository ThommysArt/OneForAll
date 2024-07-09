import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const quizId = parseInt(req.query.quizId as string);

        if (req.method === "POST") {
            const { label } = req.body;
            const question = await db.question.create({
                data: {
                    label,
                    quizId
                }
            });
            return res.status(201).json(question);
        } else if (req.method === "GET") {
            const questions = await db.question.findMany({
                where: { quizId }
            });
            return res.status(200).json(questions);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
