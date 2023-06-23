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
      birthday: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phoneCode:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
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
      confirmPassword: {
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
        allowNull: true,
      },
      dniPasaport: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
