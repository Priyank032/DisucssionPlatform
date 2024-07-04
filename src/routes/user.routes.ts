import { Router } from 'express';
import { validate, validateQuery } from '../middleware/validation.middleware';
import { registerschema, loginSchema, updateUserSchema, searchUserSchema } from '../validations/user.validation';
import * as userController from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', validate(registerschema), userController.createUser);
router.post('/login', validate(loginSchema), userController.loginUser);
router.get('/search-user', authMiddleware);
router.get('/:userId', authMiddleware, userController.getUserById);
router.put('/:userId', authMiddleware, validate(updateUserSchema), userController.updateUser);
router.delete('/:userId', authMiddleware, userController.deleteUser);
router.get('/', authMiddleware, userController.getUsers);

export default router;
