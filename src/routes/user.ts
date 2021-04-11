import { Router } from 'express';
import { createUserController } from '../controllers/user/CreateUser.controller';
import { loginUserController } from '../controllers/user/LoginUser.controller';
import { profileUserController } from '../controllers/user/ProfileUser.controller';
import {
  CreateLikeJokeController,
  ListLikeJokeController,
} from '../controllers/user/LikeJoke.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.post('/register', asyncMiddleware(createUserController));

router.post('/login', asyncMiddleware(loginUserController));

router.get('/profile', asyncMiddleware(profileUserController));

router.get('/like', asyncMiddleware(ListLikeJokeController));

router.post('/like/:jokeId', asyncMiddleware(CreateLikeJokeController));

export const userRouter: Router = router;
