import { Router } from 'express';
import { validate } from '../middleware/validation.middleware';
import { createDiscussionSchema, updateDiscussionSchema } from '../validations/discussion.validation';
import * as discussionController from '../controllers/discussion.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/', authMiddleware, validate(createDiscussionSchema), discussionController.createDiscussion);
router.get('/', discussionController.getDiscussions);
router.get('/tag', discussionController.getDiscussionsByTag);
router.put('/:discussionId', authMiddleware, validate(updateDiscussionSchema), discussionController.updateDiscussion);
router.delete('/:discussionId', authMiddleware, discussionController.deleteDiscussion);

export default router;
