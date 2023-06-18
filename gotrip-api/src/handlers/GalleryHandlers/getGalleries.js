const {getAllGalleries} = require('../../controllers/GalleryControllers/getAllGalleries');
const {getById} = require('../../controllers/GalleryControllers/getById.js');
const getGalleries= async(req, res)=>{
    try{
const results= await getAllGalleries();
res.status(200).json(results);
    }catch(error){
res.status(400).json({error: error.message})
    }
}

const getGalleriesById = async(req, res)=>{
    const {id}= req.params;
    try{
const results = await getById(id);
res.status(200).json(results);
    }catch(err){
        console.log(err.message)
return err.message
    }
}
module.exports={getGalleries, getGalleriesById};

// En esta carpeta van los handlers de Gallery
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