import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const courseId = parseInt(req.query.courseId as string);
        const videoId = parseInt(req.query.videoId as string);

        if (req.method === "GET") {
            const video = await db.video.findUnique({
                where: { id: videoId, courseId }
            });
            if (!video) {
                return res.status(404).json({ error: 'Video not found' });
            }
            return res.status(200).json(video);
        } else if (req.method === "PATCH") {
            const { title, url } = req.body;
            const updatedVideo = await db.video.update({
                where: { id: videoId, courseId },
                data: { title, url }
            });
            return res.status(200).json(updatedVideo);
        } else if (req.method === "DELETE") {
            await db.video.delete({
                where: { id: videoId, courseId }
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
