import { Router } from 'express';
import { jokeByTypeController } from '../controllers/joke/JokeByType.controller';
import { randomJokeController } from '../controllers/random/RandomJoke.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/joke', asyncMiddleware(randomJokeController));

router.get('/jokes', asyncMiddleware(randomJokeController));

router.get('/type/:type', asyncMiddleware(jokeByTypeController));

export const randomRouter: Router = router;
