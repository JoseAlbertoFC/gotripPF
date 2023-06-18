const {deleteDestination}= require('../../controllers/DestinationControllers/deleteDestination');

const deleteOfDestination= async(req, res)=>{
    const {id} = req.params;
    try{
 await deleteDestination(id);
res.status(200).json('Se ha eliminado el destino con el id: '+ id);
    }catch(err){
res.status(400).json({error: err.message})
    }
}
module.exports={deleteOfDestination};