
const {getAllDestinations}= require('../../controllers/DestinationControllers/getAllDestinations');
const {getDestinationById}= require('../../controllers/DestinationControllers/getDestinationById')
const getDestinations=async(req, res)=>{
    try{
const results = await getAllDestinations();
res.status(200).json(results);
    }catch(err){
res.status(400).json({error: err.message})
    }
}

const getDestinationsId = async(req,res)=>{
    const {id}= req.params;
    try{
const results= await getDestinationById(id);
res.status(200).json(results);
    }catch(error){
res.status(400).json({error: error.message})
    }
}

module.exports= {getDestinations, getDestinationsId};
// En esta carpeta van los handlers de Destination
// Porfa crea un archivo para cada handler

// Ejemplo:
// const {countryDetail} = require("../controllers/Countries");

// const getCountryById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const result = await countryDetail(id.toUpperCase());
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getCountryById,
// };

//Borra este comentario guia al empezar a codear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!