import { Router } from 'express';
import { JokeByTypeController } from '../controllers/joke/JokeByType.controller';
import { RandomJokeController } from '../controllers/random/RandomJoke.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.get('/joke', wrapAsync(RandomJokeController));

router.get('/jokes', wrapAsync(RandomJokeController));

router.get('/type/:type', wrapAsync(JokeByTypeController));

export const RandomRouter: Router = router;
