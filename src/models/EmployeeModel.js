const { getDB } = require('../config/db');

const collectionName = 'employees';

async function addEmployee(employeeData) {
  const db = getDB();
  const result = await db.collection(collectionName).insertOne(employeeData);
  return result.ops[0];
}

async function updateEmployee(id, employeeData) {
  const db = getDB();
  const result = await db.collection(collectionName).findOneAndUpdate(
    { _id: id },
    { $set: employeeData },
    { returnOriginal: false }
  );
  return result.value;
}

async function listEmployees({ filter = {}, sort = {}, page = 1, limit = 10 }) {
  const db = getDB();
  const skip = (page - 1) * limit;
  const employees = await db
    .collection(collectionName)
    .find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .toArray();
  return employees;
}

module.exports = { addEmployee, updateEmployee, listEmployees };
