const {updateDestination}= require('../../controllers/DestinationControllers/updateDestination')

const putDestination= async(req, res)=>{
    try{
const results = await updateDestination(req.body);
res.status(200).json(results);
    }catch(err){
res.status(400).json({error: err.message})
    }
}

module.exports=  {putDestination};