import { Router } from 'express';
import { JokeByIdController } from '../controllers/joke/JokeById.controller';
import { JokeBySearchController } from '../controllers/joke/JokeBySearch.controller';
import { JokeByTypeController } from '../controllers/joke/JokeByType.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.get('/search', wrapAsync(JokeBySearchController));

router.get('/:id', wrapAsync(JokeByIdController));

router.get('/type/:type', wrapAsync(JokeByTypeController));

export const JokeRouter: Router = router;
