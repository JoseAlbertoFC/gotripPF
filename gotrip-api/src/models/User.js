// Aqui va el modelo User.

const {DataTypes,Sequelize, UUIDV4} = require('sequelize');


module.exports = (sequelize) => {

  // TODO Definicion del modelo 

  sequelize.define(
    'User',
    {
      id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue:UUIDV4
      },
      name:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      gender:{
        type:DataTypes.STRING,
        allowNull: false,
        // Pendiente  para ver si las validaciones viene del FRONT-END
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          esGeneroValido(value) {
            if (!['Masculino', 'Femenino', 'No binario'].includes(value)) {
              throw new Error('El género especificado no es válido');
            }
          }
        }
      // },
      },
      Birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          min: '1900-01-01', // Fecha mínima permitida
          max: new Date().toISOString().split('T')[0] // Fecha máxima permitida (hoy)
        }
      },
      email:{
        isEmail(email) {
          if (/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
            throw new Error("This is an invalid email.");
          }
        
        },
        password:{
          type: DataTypes.STRING,
          allowNull: false,
            validate: {
              isAlphanumeric: true,
              len: [8, 16] // Longitud mínima y máxima de la contraseña
            }
        },
        address:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        dniPasaport:{
          type:DataTypes.INTEGER,
          allowNull: false,

        },
        status:{
          type:DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue:true
        },
        rool: {
          type: DataTypes.ENUM('Opción 1', 'Opción 2', 'Opción 3'),
          defaultValue: 'Opción 1',
        },
        

      }

    },
    { timestamps: true }
  )

}

