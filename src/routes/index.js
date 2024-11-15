const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const employeeSchema = require('../schemas/EmployeeSchema');
const employeeResolvers = require('../resolvers/EmployeeResolvers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use('/graphql', authMiddleware, graphqlHTTP({
  schema: employeeSchema,
  rootValue: employeeResolvers,
  graphiql: true, 
}));

module.exports = router;
