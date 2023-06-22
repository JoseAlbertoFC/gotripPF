const { Op } = require('sequelize');
const {Destination}= require('../../db');

const getDestinationByCity = async(cityName)=>{
    try{
const getCity = await Destination.findAll({
    where:{
        city: {
            [Op.iLike]: `%${cityName}%`
        }
    }
})

if(getCity.length > 0) return getCity;
return 'Sorry this city is not founded'
    }catch(err){
throw new Error(err.message)
    }
}

module.exports={getDestinationByCity};