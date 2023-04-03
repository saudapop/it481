const initCustomer = require('./customer');

function initModels(db) {
  const Customer = initCustomer(db);
  return { Customer };
}

module.exports = initModels;
