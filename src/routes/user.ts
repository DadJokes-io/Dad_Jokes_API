import { Router } from 'express';
import { createUserController } from '../controllers/user/CreateUser.controller';
import { loginUserController } from '../controllers/user/LoginUser.controller';
import { profileUserController } from '../controllers/user/ProfileUser.controller';
import {
  CreateLikeJokeController,
  ListLikeJokeController,
} from '../controllers/user/LikeJoke.controller';
import asyncMiddleware from '../middleware/async.middleware';
import { publicUserController } from '../controllers/user/PublicUser.controller';
import { getUserPostController } from '../controllers/user/GetUserPosts.controller';
import { getUserLikesController } from '../controllers/user/GetUserLikes.controller';
import { updateUserController } from '../controllers/user/UpdateUser.controller';
import { UnlikeJokeController } from '../controllers/user/UnlikeJoke.controller';

const router: Router = Router();

router.post('/register', asyncMiddleware(createUserController));

router.post('/login', asyncMiddleware(loginUserController));

router.get('/profile', asyncMiddleware(profileUserController));

router.get('/like', asyncMiddleware(ListLikeJokeController));

router.get('/public/profile/:id', asyncMiddleware(publicUserController));

router.put('/unlike/:jokeId', asyncMiddleware(UnlikeJokeController));

router.post('/like/:jokeId', asyncMiddleware(CreateLikeJokeController));

router.get('/likes/:userId', asyncMiddleware(getUserLikesController));

router.get('/posts/:userId', asyncMiddleware(getUserPostController));

router.put('/', asyncMiddleware(updateUserController));

export const userRouter: Router = router;
