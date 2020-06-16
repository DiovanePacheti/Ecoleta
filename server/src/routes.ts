import { Router } from 'express';
import ItemsController from './controllers/ItemsController';

const routes = Router();

const itemsController = new ItemsController();

routes.post('/items', itemsController.create);
routes.get('/items', itemsController.list);

export default routes;

