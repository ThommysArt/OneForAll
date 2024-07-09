import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);

        if (req.method === "GET") {
            const course = await db.course.findUnique({
                where: { id: courseId }
            });
            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }
            return res.status(200).json(course);
        } else if (req.method === "PATCH") {
            const { title, description, fullPrice, monthlyPrice } = req.body;
            const updatedCourse = await db.course.update({
                where: { id: courseId },
                data: { title, description, fullPrice, monthlyPrice }
            });
            return res.status(200).json(updatedCourse);
        } else if (req.method === "DELETE") {
            await db.course.delete({
                where: { id: courseId }
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
