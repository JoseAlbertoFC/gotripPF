const { Hotel} = require("../../db")


const getHotelById = async(id) =>{
    if (!id) throw new Error(`The id is required`);
    console.log("**********************");
    console.log(id);
    console.log("**********************");
    const objHotel = await Hotel.findByPk(id);
    if (!objHotel ) return;
    return {...objHotel.toJSON()}
}


module.exports = {
    getHotelById 
}