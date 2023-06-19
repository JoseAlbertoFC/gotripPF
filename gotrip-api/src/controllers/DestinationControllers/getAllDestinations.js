const api = require('../../../api/apiHotels.json');

const {Destination, Hotel}= require('../../db');

const getAllDestinations= async()=>{
    //JSON
    try{
    const infoDestination= api.map((hotel)=>{
        return {
            id: hotel.country_id,
            country: hotel.country,
            state: hotel.state,
            city: hotel.city,
            moneyType: hotel.rates_currency,
            status: hotel?true: false,
        }
    })
console.log(infoDestination);
    //BD
    const bdDestination= await Destination.findAll();

    if(infoDestination.length>0|| bdDestination.length>0)
    return [...bdDestination, ...infoDestination];}
    catch(err){
        throw Error(err.message)
    }
}

module.exports= {getAllDestinations};

// En esta carpeta van los controllers de Destination
// Porfa crea un archivo para cada controller

// Ejemplo

// const axios = require("axios");
// const { Activity, Country } = require("../db");

// const countryDetail = async (id) => {           
//     try {                                            
//       return await Country.findByPk(id, {
//         include: [Activity],
//       });
//     } catch (error) {
//       throw new Error("Ups! We got a problem.");
//     }
//   };

// module.exports = {
//     countryDetail,
//   };

//Borra este comentario guia al empezar a codear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!