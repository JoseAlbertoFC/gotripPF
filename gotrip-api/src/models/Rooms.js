// Aqui va el modelo Rooms.

const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // TODO Definicion del modelo

  sequelize.define("Rooms", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    room: {
      type: DataTypes.ENUM("simple", "familiar", "group"),
      defaultValue: "simple",
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100000,
      },
      kindRoom: {
        type: DataTypes.ENUM("Standard", "Executive", "Premium", "VIP"),
        allowNull: false,
        defaultValue: "VIP"
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
  },
  { timestamps: true },
  { paranoid: true }
  );
};
