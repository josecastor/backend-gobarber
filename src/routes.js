import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import sessionController from './app/controllers/SessionController';
import userController from './app/controllers/UserController';

const routers = new Router();

routers.get('/', (req, res) => res.json({ status: 'Api On' }));

routers.post('/sessions', sessionController.store);
routers.post('/users', userController.store);

routers.use(authMiddleware);

routers.put('/users', userController.update);

export default routers;
