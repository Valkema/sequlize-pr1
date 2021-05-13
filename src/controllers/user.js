import { User } from './../db/models';

export async function createUser(req, res, next) {
  try {
    const created_user = await User.create(req.body);
    if (created_user) {
      const user_data = created_user.get();
      delete user_data.password;
      return res.status(201).send(user_data);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateUserByPk(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },
      returning: true,
    });
    if (updateRowsCount) {
      const user_data = updateRows.get();
      delete user_data.password;
      return res.status(201).send(user_data);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getUserByPk(req, res, next) {
  try {
    const found_user = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (found_user) {
      return res.status(201).send(found_user);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteUserByPk(req, res, next) {
  try {
    const found_user = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    if (found_user) {
      return res.status(201).send(found_user);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}