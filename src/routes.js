import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routers = new Router();
const upload = multer(multerConfig);

routers.get('/', (req, res) => res.json({ status: 'Api On' }));

routers.post('/sessions', SessionController.store);
routers.post('/users', UserController.store);

routers.use(authMiddleware);

routers.put('/users', UserController.update);

routers.get('/providers', ProviderController.index);

routers.get('/appointments', AppointmentController.index);
routers.post('/appointments', AppointmentController.store);

routers.get('/schedule', ScheduleController.index);

routers.post('/files', upload.single('file'), FileController.store);

export default routers;
