const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    class: String
    subjects: [String]
    attendance: Float
  }

  input EmployeeInput {
    name: String!
    age: Int!
    class: String
    subjects: [String]
    attendance: Float
  }

  type Query {
    listEmployees(page: Int, limit: Int, sort: String, filter: String): [Employee]
    getEmployee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(employeeInput: EmployeeInput): Employee
    updateEmployee(id: ID!, employeeInput: EmployeeInput): Employee
  }
`);
