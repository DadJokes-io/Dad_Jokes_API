import { Router } from 'express';
import { createUserController } from '../controllers/user/CreateUser.controller';
import { loginUserController } from '../controllers/user/LoginUser.controller';
import { profileUserController } from '../controllers/user/ProfileUser.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.post('/register', asyncMiddleware(createUserController));

router.post('/login', asyncMiddleware(loginUserController));

router.get('/profile', asyncMiddleware(profileUserController));

export const userRouter: Router = router;
