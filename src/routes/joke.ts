import { Router } from 'express';
import { countJokeController } from '../controllers/joke/CountJoke.controller';
import { createJokeController } from '../controllers/joke/CreateJoke.controller';
import { deleteJokeController } from '../controllers/joke/DeleteJoke.controller';
import { jokeByIdController } from '../controllers/joke/JokeById.controller';
import { jokeBySearchController } from '../controllers/joke/JokeBySearch.controller';
import { jokeByTypeController } from '../controllers/joke/JokeByType.controller';
import { PNGByIdController } from '../controllers/joke/PNGById.controllert';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/count', asyncMiddleware(countJokeController));

router.get('/search', asyncMiddleware(jokeBySearchController));

router.get('/:id/png', asyncMiddleware(PNGByIdController));

router.get('/:id', asyncMiddleware(jokeByIdController));

router.get('/type/:type', asyncMiddleware(jokeByTypeController));

router.post('/create', asyncMiddleware(createJokeController));

router.delete('/delete', asyncMiddleware(deleteJokeController));

export const jokeRouter: Router = router;
