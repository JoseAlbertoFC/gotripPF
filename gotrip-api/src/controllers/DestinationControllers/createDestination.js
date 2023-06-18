const {Destination, Hotel} = require('../../db');

const createDestination = async(info)=>{
    const {country, city, state, moneyType, status, idHotel} = info;

    try{
const fireProof = await Destination.findOne({where: {country, state, city, moneyType, status}, include:{
    model: Hotel, as: 'hotel', where:{id: idHotel}
}})

if(!fireProof || fireProof== null){
    const createThisDestination = await Destination.create({country, state, city, moneyType, status});
    await createThisDestination.setHotel(idHotel);
    return createThisDestination;
}
    }catch(err){
throw new Error(err.message);
    }
}

module.exports={createDestination};