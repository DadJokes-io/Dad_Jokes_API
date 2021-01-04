import { Router } from 'express';
import { CountJokeController } from '../controllers/joke/CountJoke.controller';
import { CreateJokeController } from '../controllers/joke/CreateJoke.controller';
import { DeleteJokeController } from '../controllers/joke/DeleteJoke.controller';
import { JokeByIdController } from '../controllers/joke/JokeById.controller';
import { JokeBySearchController } from '../controllers/joke/JokeBySearch.controller';
import { JokeByTypeController } from '../controllers/joke/JokeByType.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.get('/count', wrapAsync(CountJokeController));

router.get('/search', wrapAsync(JokeBySearchController));

router.get('/:id', wrapAsync(JokeByIdController));

router.get('/type/:type', wrapAsync(JokeByTypeController));

router.post('/create', wrapAsync(CreateJokeController));

router.delete('/delete', wrapAsync(DeleteJokeController));

export const JokeRouter: Router = router;
