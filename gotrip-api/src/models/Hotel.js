// Aqui va el modelo Hotel.
const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Hotel",
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
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        // validate: {
        //   isEmail(email) {
        //     if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        //       throw new Error("This is an invalid email.");
        //     }
        //   },
        // },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        // validate: {
        //   isPhoneNumber(value) {
        //     if (!/^\d{10}$/.test(value)) {
        //       throw new Error("This is an invalid phone number.");
        //     }
        //   },
        // },
      },
      checkIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      checkOut: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: true, 
      paranoid: true }
  );
};
