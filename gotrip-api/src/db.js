require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize({
  database: process.env.PGDATABASE,
  dialect: process.env.DB_USER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.DB_USER,
  password: process.env.PGPASSWORD,
  pool: {
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Hotel,
  Rooms,
  Service,
  Pay,
  User,
  Gallery,
  Rating,
  Destination,
  Booking,
} = sequelize.models;

Destination.hasMany(Hotel, { as: "hotel", foreignKey: "destinationId" });

Hotel.hasMany(Rooms, { as: "rooms", foreignKey: "hotelId" });
Hotel.belongsTo(Destination, {
  as: "destination",
  foreignKey: "destinationId",
});
Hotel.hasMany(Gallery, { as: "gallery", foreignKey: "hotelId" });
Hotel.hasMany(Rating, { as: "rating", foreignKey: "hotelId" });
Hotel.hasMany(Booking, { as: "booking", foreignKey: "hotelId" });
Hotel.belongsTo(User, { as: "user", foreignKey: "userId" });

User.hasMany(Hotel, { as: "hotel", foreignKey: "userId" });

Rooms.belongsTo(Hotel, { as: "hotel", foreignKey: "hotelId" });
Rooms.belongsToMany(Service, { through: "Rooms_Service" });
Rooms.hasMany(Gallery, { as: "gallery", foreignKey: "roomId" });

Service.belongsToMany(Rooms, { through: "Rooms_Service" });

Booking.belongsTo(Rooms, { as: "rooms", foreignKey: "roomId" });
Booking.hasOne(Pay, { as: "pay", foreignKey: "bookingId" });
Booking.belongsTo(Hotel, { as: "hotel", foreignKey: "hotelId" });
Booking.belongsTo(User, { as: "user", foreignKey: "userId" });

Rating.belongsTo(Hotel, { as: "hotel", foreignKey: "hotelId" });
Rating.belongsTo(User, { as: "user", foreignKey: "userId" });
Rating.belongsTo(Rooms, { as: "rooms", foreignKey: "userId" });

User.hasMany(Pay, { as: "pay", foreignKey: "userId" });

Pay.belongsTo(User, { as: "user", foreignKey: "userId" });
Pay.belongsTo(Booking, { as: "booking", foreignKey: "bookingId" });

Gallery.belongsTo(Hotel, { as: "hotel", foreignKey: "hotelId" });
Gallery.belongsTo(Rooms, {
  as: "rooms",
  foreignKey: "roomId",
  allowNull: true,
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
