const EmployeeController = require('../controllers/EmployeeController');

const resolvers = {
  listEmployees: async ({ page, limit, sort, filter }) => {
    const filterCriteria = filter ? JSON.parse(filter) : {};
    const sortCriteria = sort ? JSON.parse(sort) : {};
    return await EmployeeController.listEmployees({ filter: filterCriteria, sort: sortCriteria, page, limit });
  },
  getEmployee: async ({ id }) => {
    return await EmployeeController.getEmployeeById(id);
  },
  addEmployee: async ({ employeeInput }) => {
    return await EmployeeController.createEmployee(employeeInput);
  },
  updateEmployee: async ({ id, employeeInput }) => {
    return await EmployeeController.updateEmployee(id, employeeInput);
  }
};

module.exports = resolvers;
