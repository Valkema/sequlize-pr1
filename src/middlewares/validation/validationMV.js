import { ACTION } from '../../constants';

export default function validationMV(schema) {
  return (action = ACTION.CREATE) => {
    return async (req, res, next) => {
      try {
        req.body = await schema.validateAsync(req.body, {
          context: {
            isCreateMode: action === ACTION.CREATE,
          },
        });
        next();
      } catch (e) {
        next(e);
      }
    };
  };
}