const {Destination, Hotel} = require('../../db');

const createDestination = async(info)=>{
    const {country, city, state, moneyType, status, } = info;

    try{
const fireProof = await Destination.findOne({where: {country, state, city}})

if(!fireProof || fireProof== null){
    const createThisDestination = await Destination.create({country, state, city, moneyType, status});
    return createThisDestination;
} else return 'Existen registros de que dicho destino ya existe con estas credenciales';
    }catch(err){
throw new Error(err.message);
    }
}

module.exports={createDestination};