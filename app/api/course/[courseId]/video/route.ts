import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);

        if (req.method === "POST") {
            const { title, url } = req.body;
            const video = await db.video.create({
                data: {
                    title,
                    url,
                    courseId
                }
            });
            return res.status(201).json(video);
        } else if (req.method === "GET") {
            const videos = await db.video.findMany({
                where: { courseId }
            });
            return res.status(200).json(videos);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
