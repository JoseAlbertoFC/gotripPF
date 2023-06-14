require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gotripdb`,
  {
    logging: false, 
    native: false, 
  }
);
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


const { Hotel, Rooms, Service, Pay, User, Gallery, Rating, Destination, Booking } =
  sequelize.models;

Hotel.hasMany(Rooms, { as: 'rooms', foreignKey: 'id' });
Rooms.belongsTo(Hotel, { as: 'hotel', foreignKey: 'id' });

Destination.hasMany(Hotel, { as: 'hotel', foreignKey: 'id' });
Hotel.belongsTo(Destination, { as: 'destination', foreignKey: 'id' });

Hotel.hasMany(Gallery, { as: 'gallery', foreignKey: 'id' });
Gallery.belongsTo(Hotel, { as: 'hotel', foreignKey: 'id' });

Hotel.hasMany(Rating, { as: 'rating', foreignKey: 'id' });
Rating.belongsTo(Hotel, { as: 'hotel', foreignKey: 'id' });

Hotel.hasMany(Booking, { as: 'booking', foreignKey: 'id' });
Booking.belongsTo(Hotel, { as: 'hotel', foreignKey: 'id' });

User.hasMany(Pay, { as: 'pay', foreignKey: 'id' });
Pay.belongsTo(User, { as: 'User', foreignKey: 'id' });

Rooms.belongsToMany(Service, {through: "Rooms_Service"});
Service.belongsToMany(Rooms, {through: "Rooms_Service"})




module.exports = {
  ...sequelize.models, 
  conn: sequelize, 
};