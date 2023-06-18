const {deleteGallery}= require('../../controllers/GalleryControllers/deleteGallery')

const deleteGalleries = async(req,res)=>{
    const {id} = req.params;

    try{
id? await deleteGallery(id): 'No actions are required here';
res.status(200).json(`Imagen de la galería con id: ${id} ha sido eliminado/inhabilitado exitosamente`);
    }catch(err){
res.status(400).json({error: err.message})
    }
}

module.exports={deleteGalleries};