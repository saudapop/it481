const { DataTypes } = require('sequelize');

function initOrder(db) {
  return db.define(
    'Order',
    {
      OrderID: { type: DataTypes.INTEGER, primaryKey: true },
      CustomerID: { type: DataTypes.STRING },
      EmployeeID: { type: DataTypes.INTEGER },
      OrderDate: { type: DataTypes.STRING },
      RequiredDate: { type: DataTypes.DATE },
      ShippedDate: { type: DataTypes.DATE },
      ShipVia: { type: DataTypes.STRING },
      Freight: { type: DataTypes.DECIMAL(2) },
      ShipName: { type: DataTypes.STRING },
      ShipAddress: { type: DataTypes.STRING },
      ShipCity: { type: DataTypes.STRING },
      ShipRegion: { type: DataTypes.STRING },
      ShipPostalCode: { type: DataTypes.STRING },
      ShipCountry: { type: DataTypes.STRING },
    },
    { id: false, createdAt: false, updatedAt: false }
  );
}

module.exports = initOrder;
