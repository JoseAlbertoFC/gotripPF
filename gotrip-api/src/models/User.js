// Aqui va el modelo User.

const { DataTypes,Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  // TODO Definicion del modelo

  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode:{
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true,
          len: [8, 16], // Longitud mínima y máxima de la contraseña
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dniPasaport: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      rol: {
        type: DataTypes.ENUM("user", "admin", "host"),
        defaultValue: "user",
        allowNull: false,
      },
      thirdPartyCreated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: true },
    { paranoid: true }
  );
};
