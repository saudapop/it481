require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const port = 3005;

const { USERNAME, PASSWORD, SERVER } = process.env;

const sequelize = new Sequelize('Northwind', USERNAME, PASSWORD, {
  host: SERVER,
  dialect: 'mssql',
});

const { Customer } = require('./db/models')(sequelize);

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/customers', async (req, res) => {
  let customers = await Customer.findAll();
  res.json(customers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
