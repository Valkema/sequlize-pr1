import express from 'express';
import {
  createUser,
  updateUserByPk,
  getUserByPk,
  deleteUserByPk,
} from '../controllers/user';
import validationMV from '../middlewares/validation/validationMV.js';
import { ACTION } from '../constants';
import schemas from '../utils/validation';

const userRouter = express.Router();
const createUserValidationMV = validationMV(schemas.userSchema);

userRouter.post('/', createUserValidationMV(ACTION.CREATE), createUser);

userRouter.patch(
  '/:userId',
  createUserValidationMV(ACTION.UPDATE),
  updateUserByPk
);

userRouter.get('/:userId', createUserValidationMV(ACTION.READ), getUserByPk);

userRouter.delete(
  '/:userId',
  createUserValidationMV(ACTION.DELETE),
  deleteUserByPk
);

export default userRouter;