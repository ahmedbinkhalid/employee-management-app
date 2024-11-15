
const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db');

const { MongoClient } = require('mongodb');
require('dotenv').config();

const { getDB } = require('../config/db');

const { addEmployee, updateEmployee, listEmployees } = require('../models/EmployeeModel');

const { graphqlHTTP } = require('express-graphql');
const employeeSchema = require('../schemas/EmployeeSchema');
const employeeResolvers = require('../resolvers/EmployeeResolvers');
const authMiddleware = require('../middlewares/authMiddleware');

const jwt = require('jsonwebtoken');
require('dotenv').config();
