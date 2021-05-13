import { Task } from './../db/models';

export async function createTask(req, res, next) {
  try {
    const created_user = await Task.create(req.body);
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateTask(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await Task.update(req.body, {
      where: {
        id: req.params.taskId,
      },
      returning: true,
    });
    if (updateRowsCount) {
      return res.status(201).send(updateRows[0]);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getTask(req, res, next) {
  try {
    const found_task = await Task.findByPk(req.params.taskId);
    if (found_task) {
      return res.status(201).send(found_task);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteTask(req, res, next) {
  try {
    const found_task = await Task.destroy({
      where: {
        id: req.params.taskId,
      },
    });
    if (found_task) {
      return res.status(201).send(found_task);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}