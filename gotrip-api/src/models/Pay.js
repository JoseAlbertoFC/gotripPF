// Aqui va el modelo Pay.

const {DataTypes,Sequelize, UUIDV4} = require('sequelize');


module.exports = (sequelize) => {

  // TODO Definicion del modelo 

  sequelize.define(
    'Pagos',
    {
      id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue:UUIDV4
      },
      monto:{
        type: DataTypes.DECIMAL(10, 2), // Definir tipo de dato DECIMAL con 10 dígitos y 2 decimales
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0, // Mínimo valor permitido
          max: 100000 // Máximo valor permitido
        },
        fechaPago:{
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            isDate: true,
            isBefore: new Date().toISOString().split('T')[0] // Fecha máxima permitida (hoy)
          }
        },
        statusPago:{
          type:DataTypes.DATEONLY,
          allowNull: false,
        },
       

      }
    },
     { timestamps: true }
  )
  }
