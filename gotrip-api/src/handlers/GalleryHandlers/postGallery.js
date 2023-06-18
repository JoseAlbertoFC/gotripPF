const {createGallery}= require('../../controllers/GalleryControllers/createGallery');

const postGallery= async(req, res)=>{
    try{
const results= await createGallery(req.body)
res.status(200).json(results);
    }catch(err){
res.status(400).json({error: err.message})
    }
}

module.exports={postGallery};