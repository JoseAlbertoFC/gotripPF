const {Destination}= require('../../db');

const deleteDestination = async(idToDelete)=>{
try{
const forRef = await Destination.findByPk(idToDelete);
 await Destination.destroy({where: {id: idToDelete}});
return 'Se ha eliminado exitosamente el destino con el id ' + idToDelete +'de la lista';}
catch(err){
    throw new Error(err.message);
}
}

module.exports={deleteDestination};