// Aqui va el modelo Rooms.

const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // TODO Definicion del modelo

  sequelize.define(
    "Rooms",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 100000,
        },
      },

      numRooms: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      roomsInUse: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ServicesRoom: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: [],
      },
    },
    { timestamps: true },
    { paranoid: true }
  );
};
