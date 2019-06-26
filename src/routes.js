import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import sessionController from './app/controllers/SessionController';
import userController from './app/controllers/UserController';
import providerController from './app/controllers/ProviderController';
import fileController from './app/controllers/FileController';

const routers = new Router();
const upload = multer(multerConfig);

routers.get('/', (req, res) => res.json({ status: 'Api On' }));

routers.post('/sessions', sessionController.store);
routers.post('/users', userController.store);

routers.use(authMiddleware);

routers.put('/users', userController.update);

routers.get('/providers', providerController.index);

routers.post('/files', upload.single('file'), fileController.store);

export default routers;
