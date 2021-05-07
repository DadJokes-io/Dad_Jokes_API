import { Router } from 'express';
import { countTypeController } from '../controllers/type/CountType.controller';
import { createTypeController } from '../controllers/type/CreateType.controller';
import { getTypeController } from '../controllers/type/GetType.controller';
import { updateTypeController } from '../controllers/type/UpdateType.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/count/:type', asyncMiddleware(countTypeController));

router.get('/', asyncMiddleware(getTypeController));

router.post('/', asyncMiddleware(createTypeController));

router.put('/:id', asyncMiddleware(updateTypeController));

export const typeRouter: Router = router;
