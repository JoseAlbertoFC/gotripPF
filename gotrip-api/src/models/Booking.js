// Aqui va el modelo Hotel.
const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      dateIn: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dateOut: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      roomNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validation: {
            min: 1,
            max: 300
        }
      },
      reservationStatus: {
        type: DataTypes.ENUM("Rejected", "Pending", "Approved"),
        allowNull: false,
      },
      gests: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
    },
    { timestamps: true }
  );
};