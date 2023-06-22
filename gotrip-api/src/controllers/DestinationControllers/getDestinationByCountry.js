const { Op } = require('sequelize');
const {Destination}= require('../../db');

const getDestinationByCountry= async(countryName)=>{
    try{
        const getCountry = await Destination.findAll({
            where: {
                country: {[Op.iLike]: `%${countryName}%`}
            }
        })
        if(getCountry.length <0) return 'Theres no Destination with that Country'
        console.log(getCountry);
        return getCountry;
    }catch(error){
        throw new Error(error.message);
    }
}
module.exports={getDestinationByCountry};