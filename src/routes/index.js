import express from 'express';
import userRouter from './user.js';
import taskRouter from './task.js';
import errorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.use('/user', userRouter);

router.use('/task', taskRouter);

router.use(errorHandler);

export default router;