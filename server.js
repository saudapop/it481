require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const { initCustomer, initEmployee, initOrder } = require('./db/models');

const { SERVER, PORT } = process.env;

const port = PORT || 3005;

async function loginDb(req) {
  const { user, password, serverAddress } = req.body;
  const sequelize = new Sequelize('Northwind', user, password, {
    host: serverAddress || SERVER,
    dialect: 'mssql',
  });
  await sequelize.authenticate();
  return sequelize;
}

function handleError(error, res) {
  console.log(error.message);
  res.status(401);
  res.json({ message: error.message });
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

const getUserRoleQuery = (username) => `SELECT r.name
FROM Northwind.sys.database_role_members rm
INNER JOIN Northwind.sys.database_principals p ON rm.member_principal_id = p.principal_id
INNER JOIN Northwind.sys.database_principals r ON rm.role_principal_id = r.principal_id
WHERE p.name = '${username}';`;

app.post('/login', async (req, res) => {
  try {
    const sequelize = await loginDb(req);
    const response = await sequelize.query(getUserRoleQuery(req.body.user));
    res.status(200).json({ role: response[0][0].name });
  } catch (error) {
    handleError(error, res);
  }
});
app.post('/customers', async (req, res) => {
  try {
    const db = await loginDb(req);
    const Customer = initCustomer(db);
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    handleError(error, res);
  }
});

app.post('/employees', async (req, res) => {
  try {
    const db = await loginDb(req);
    const Employee = initEmployee(db);
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    handleError(error, res);
  }
});

app.post('/orders', async (req, res) => {
  try {
    const db = await loginDb(req);
    const Order = initOrder(db);
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    handleError(error, res);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
