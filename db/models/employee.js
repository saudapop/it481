const { DataTypes } = require('sequelize');

function initEmployee(db) {
  return db.define(
    'Employee',
    {
      EmployeeID: { type: DataTypes.INTEGER, primaryKey: true },
      LastName: { type: DataTypes.STRING },
      FirstName: { type: DataTypes.STRING },
      Title: { type: DataTypes.STRING },
      TitleOfCourtesy: { type: DataTypes.STRING },
      BirthDate: { type: DataTypes.DATE },
      HireDate: { type: DataTypes.DATE },
      Address: { type: DataTypes.STRING },
      City: { type: DataTypes.STRING },
      Region: { type: DataTypes.STRING },
      PostalCode: { type: DataTypes.STRING },
      Country: { type: DataTypes.STRING },
      HomePhone: { type: DataTypes.STRING },
      Salary: { type: DataTypes.DECIMAL(2) },
      Extension: { type: DataTypes.INTEGER },
      Photo: { type: DataTypes.BLOB },
      Notes: { type: DataTypes.STRING },
      ReportsTo: { type: DataTypes.INTEGER },
      PhotoPath: { type: DataTypes.STRING },
    },
    { id: false, createdAt: false, updatedAt: false }
  );
}

module.exports = initEmployee;
