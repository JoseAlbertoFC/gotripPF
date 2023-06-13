// Aqui va el modelo Service.
const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.ENUM(
          "All Inclusive",
          "2 Meals a Day",
          "Morning Buffet",
          "Free Drinks",
          "Spa Sessions",
          "Private Jacuzzi",
          "Laundry Service",
        ),
        allowNull: false,
        defaultValue: "All Inclusive"
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
