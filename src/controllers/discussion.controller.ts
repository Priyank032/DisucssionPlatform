import { Request, Response } from 'express';
import * as discussionService from '../services/discussion.service';
import { AuthRequest } from '../middleware/auth.middleware'; 4

export const createDiscussion = async (req: AuthRequest, res: Response) => {
    try {
        const { text, image, hashtags } = req.body;
        const createdBy: string = req.user?.userId || ''; // Default value or handle undefined case

        const discussion = await discussionService.createDiscussion(text, image, hashtags, createdBy);

        res.status(201).json(discussion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getDiscussions = async (_req: Request, res: Response) => {
    try {
        const discussions = await discussionService.getDiscussions();
        res.status(200).json(discussions);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getDiscussionsByTag = async (req: Request, res: Response) => {
    try {
        const { tag } = req.query;
        const discussions = await discussionService.getDiscussionsByTag(tag as string);
        res.status(200).json(discussions);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const updateDiscussion = async (req: Request, res: Response) => {
    try {
        const { discussionId } = req.params;
        const updateData = req.body;
        const discussion = await discussionService.updateDiscussion(discussionId, updateData);
        res.status(200).json(discussion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteDiscussion = async (req: Request, res: Response) => {
    try {
        const { discussionId } = req.params;
        await discussionService.deleteDiscussion(discussionId);
        res.status(200).json({ message: 'Discussion deleted successfully' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
