const {createDestination} = require('../../controllers/DestinationControllers/createDestination');

const postDestination= async(req, res)=>{
    try{
const results= await createDestination(req.body);
res.status(200).json(results);
    }catch(err){
res.status(400).json({error: err.message})
    }
}

module.exports= {postDestination};