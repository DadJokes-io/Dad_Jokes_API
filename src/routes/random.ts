import { Router } from 'express';
import { RandomJokeController } from '../controllers/random/RandomJoke.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.get('/joke', wrapAsync(RandomJokeController));

export const RandomRouter: Router = router;
