const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  insert,
  remove
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}


async function insert(user) {
  return db("users")
    .insert(user)
    .returning("id");
}



function remove(id) {
  return db('users')
  .where({ id: id })
  .del()
}