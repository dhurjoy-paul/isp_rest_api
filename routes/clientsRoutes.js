import express from 'express';
import { getAllClients } from '../controllers/clientsControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const clientsRouter = express.Router();

clientsRouter.get('/', authMiddleware, getAllClients);

export default clientsRouter;