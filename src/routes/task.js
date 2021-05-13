import express from 'express';
import {
  createTask,
  deleteTask,
  updateTask,
  getTask,
} from '../controllers/task';
import validationMV from '../middlewares/validation/validationMV.js';
import { ACTION } from '../constants';
import schemas from '../utils/validation';

const taskRouter = express.Router();

const createTaskValidationMV = validationMV(schemas.taskSchema);

taskRouter.post('/', createTaskValidationMV(ACTION.CREATE), createTask);

taskRouter.patch('/:taskId', createTaskValidationMV(ACTION.UPDATE), updateTask);

taskRouter.get('/:taskId', createTaskValidationMV(ACTION.READ), getTask);

taskRouter.delete(
  '/:taskId',
  createTaskValidationMV(ACTION.DELETE),
  deleteTask
);

export default taskRouter;