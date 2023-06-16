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

  Hotel.hasMany(Rooms, { as: 'rooms', foreignKey: 'hotelId' });
  Rooms.belongsTo(Hotel, { as: 'hotel', foreignKey: 'hotelId' });
  
  Destination.hasMany(Hotel, { as: 'hotel', foreignKey: 'destinationId' });
  Hotel.belongsTo(Destination, { as: 'destination', foreignKey: 'destinationId' });
  
  Hotel.hasMany(Gallery, { as: 'gallery', foreignKey: 'hotelId' });
  Gallery.belongsTo(Hotel, { as: 'hotel', foreignKey: 'hotelId' });
  
  Hotel.hasMany(Rating, { as: 'rating', foreignKey: 'hotelId' });
  Rating.belongsTo(Hotel, { as: 'hotel', foreignKey: 'hotelId' });
  Rating.belongsTo(User, { as: 'user', foreignKey: 'userId' });
  
  Hotel.hasMany(Booking, { as: 'booking', foreignKey: 'hotelId' });
  Booking.belongsTo(Hotel, { as: 'hotel', foreignKey: 'hotelId' });
  Booking.belongsTo(User, { as: 'user', foreignKey: 'userId' });
  
  User.hasMany(Pay, { as: 'pay', foreignKey: 'userId' });
  Pay.belongsTo(User, { as: 'user', foreignKey: 'userId' });
  Pay.hasOne(Booking, { as: 'booking', foreignKey: 'payId' });
  
  Booking.hasMany(Rooms, { as: 'rooms', foreignKey: 'bookingId' });
  Booking.hasOne(Pay, { as: 'pay', foreignKey: 'bookingId' });
  Rooms.belongsTo(Booking, { as: 'booking', foreignKey: 'bookingId' });

Rooms.belongsToMany(Service, {through: "Rooms_Service"});
Service.belongsToMany(Rooms, {through: "Rooms_Service"});




module.exports = {
  ...sequelize.models, 
  conn: sequelize, 
};
