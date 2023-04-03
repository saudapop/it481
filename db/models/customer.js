const { DataTypes } = require('sequelize');

function initCustomer(db) {
  return db.define(
    'Customer',
    {
      CustomerID: { type: DataTypes.STRING, primaryKey: true },
      CompanyName: { type: DataTypes.STRING },
      ContactName: { type: DataTypes.STRING },
      ContactTitle: { type: DataTypes.STRING },
      Address: { type: DataTypes.STRING },
      City: { type: DataTypes.STRING },
      Region: { type: DataTypes.STRING },
      PostalCode: { type: DataTypes.STRING },
      Country: { type: DataTypes.STRING },
      Phone: { type: DataTypes.STRING },
      Fax: { type: DataTypes.STRING },
    },
    { id: false, createdAt: false, updatedAt: false }
  );
}

module.exports = initCustomer;
