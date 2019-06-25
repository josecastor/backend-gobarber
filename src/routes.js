import { Router } from 'express';

import userController from './app/controllers/UserController';

const routers = new Router();

routers.get('/', (req, res) => res.json({ status: 'Api On' }));

routers.post('/users', userController.store);

export default routers;
