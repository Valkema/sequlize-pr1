/*
const { Model } = require('sequelize');
const {User} = require ('./db/models');
const {Task} = require ('./db/models');
const bcrypt = require('bcrypt');

const fun_hash_passw = async password => {
    try{
        return bcrypt.hash(password, 10);
    } catch(e){
        throw e;
    }
};

const createUser = async data => {
    try{
        data.passwordHash = await fun_hash_passw(data.password);
        const createsUser = await User.create(data);
        if(createUser){
            return createUser.length();
        }
        throw new Error();
    }catch(e){
        throw e;
    }
};

createUser(
    {
        firstName: 'Test102',
        lastName: 'Surname102',
        email: 'test102@gmail.com',
        login: 'testlogin102',
        password: 'qwerty123',
    }
).then(console.log).catch(console.err);


const getUserById = async id => {
    try{
        return (await User.findByPk(id)).get();
    } catch(e){
        throw e;
    }
};

const updateUser = async (new_data, condition) => {
    try {
      return User.update(new_data, {
        where: condition,
      });
    } catch (e) {
      throw e;
    }
  };

  const deleteUser = async (condition) => {
    try {
        return User.destroy({
          where: condition,
        });
      } catch (e) {
        throw e;
      }
  }


  getUserById(15).then(console.log).catch(console.err);
  deleteUser({ lastName: "SurName7" }).then(console.log).catch(console.err);
  updateUser({ lastName: "SurnameNew5" }, { lastName: "SurName5" }).then(console.log).catch(console.err);

*/



//==================HOMEWORK===================
/*

const findUsersWithTasks = async (condition) => {
  try {
    const users = User.findAll({
      where: condition,
      include: [{
        model: Task, 
        as: 'tasks',
        required: true
        where: {isDone: true}
      }],
    })
      return await users;
  } catch (e) {
    throw e;
  }
}


findUsersWithTasks({id: [2,3,20,45]}).then(console.log).catch(console.err);



const findTasks = async (condition) => {
  try {
    const ftasks = Task.findAll({
      where: condition,
      include: [{
        model: User, 
        as: 'owner',
        required: true
      }],
       attributes: { 
        include: [sequelize.fn('COUNT', sequelize.col('userId')), 'isDone', 'value'],
      },
      group: ['userId'],
      order: ['userId'],
      limit: 5
    })
      return await ftasks;
  } catch (e) {
    throw e;
  }
}

findTasks({isDone: true});

//===========================
*/

//======TRANSACTIONS======
/* Через транзакцию INSERT, UPDATE, DELETE */
/*
//ошибка в выполнениии. возможно, из-за sandbox - уточнить??!
import { CreditCard, sequelize } from './db/models';
async function card_transaction(fromCardId, toCardId, value) {
  try {
    const fromCard = await CreditCard.findByPk(fromCardId);
    const toCard = await CreditCard.findByPk(toCardId);

    console.log('Before transaction:');
    console.log(fromCard.get());
    console.log(toCard.get());

    const tr = await sequelize.transaction();
    fromCard.balance -= value;
    const updatedFromCard = await fromCard.save({ transaction: tr });
    toCard.balance += value;
    const updatedToCard = await toCard.save({ transaction: tr });
    await tr.commit();

    console.log('After transaction:');
    console.log(fromCard.get());
    console.log(toCard.get());
  } catch (e) {
    console.error(e);
  }
}
card_transaction(3, 4, 10000);
*/



//=================  EXPRESS =======================================

/*
// === example1
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
//====
*/

/*
//===example2 create user+postman====
import express from 'express';
import { User } from './db/models';

//const port = process.env.PORT || 3000;
const port = 3000;
const app = express();
app.use(express.json());

//параметры 1- адрес (/ корень проекта), 
//2 - функция обработки данных, в ней объект запроса и объект ответа
app.post('/user', async (req, res, next) => {
  try{
    const createUser = await User.create(req.body);
    return res.send(createUser);
    //console.log(req.body);
  } catch(e) { next(e); }
});

app.use((err, req, res) => {
  res.status(500).send('Smth broken!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
//======
*/


//========== ROUTERS====

import express from 'express';
import router from './routes';

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});




