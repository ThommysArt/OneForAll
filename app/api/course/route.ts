import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const { title, description, fullPrice, monthlyPrice } = req.body;
            const course = await db.course.create({
                data: {
                    title,
                    description,
                    fullPrice,
                    monthlyPrice
                }
            });
            return res.status(201).json(course);
        } else if (req.method === "GET") {
            const courses = await db.course.findMany();
            return res.status(200).json(courses);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
