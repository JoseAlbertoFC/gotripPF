const {googleCompare}= require('../../controllers/GoogleAuth/googleCompare');

const googleHandler = async(req, res)=>{
    console.log(req);
    const {email, displayName} = req.user;
    //console.log(email);
    try{
const results= await googleCompare(email, displayName)
console.log(results);
res.status(200).json(results);
    } catch(error){
        console.log(error.message);
res.status(400).json({error: error.message, explain: 'Sorry, creo que no hay usuarios con ese correo'});
    }
}

module.exports={googleHandler};