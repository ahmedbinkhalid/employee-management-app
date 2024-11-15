const { addEmployee, updateEmployee, listEmployees } = require('../models/EmployeeModel');
const AuthService = require('../services/AuthService');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class EmployeeController {
  async listEmployees({ filter = {}, sort = {}, page = 1, limit = 10 }) {
    try {
      const employees = await listEmployees({ filter, sort, page, limit });
      return employees;
    } catch (error) {
      throw new Error('Failed to retrieve employees');
    }
  }

  async getEmployeeById(id) {
    try {
      const employee = await getEmployeeById(id);
      if (!employee) throw new Error('Employee not found');
      return employee;
    } catch (error) {
      throw new Error('Failed to retrieve employee');
    }
  }

  async createEmployee(employeeData) {
    try {
      const newEmployee = await addEmployee(employeeData);
      return newEmployee;
    } catch (error) {
      throw new Error('Failed to create employee');
    }
  }

  async updateEmployee(id, employeeData) {
    try {
      const updatedEmployee = await updateEmployee(id, employeeData);
      if (!updatedEmployee) throw new Error('Employee not found or update failed');
      return updatedEmployee;
    } catch (error) {
      throw new Error('Failed to update employee');
    }
  }
}

module.exports = new EmployeeController();
