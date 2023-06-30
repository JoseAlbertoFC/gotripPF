 const {postUploadImg} = require("../../controllers/GalleryControllers/uploadImg.js")


const postImages= async(req,res) =>{
    try {
        const {idHotel,idRoom} = req.body;
        const fileStr = req.body.data;
 
        const uploadResponse = await postUploadImg(fileStr,idHotel,idRoom)  
       // console.log(uploadResponse);
        //res.json({ msg: 'File uploaded sucessfully' });
        if(uploadResponse.success)
        {
            console.log(uploadResponse);
            res.status(200).json(uploadResponse);
        }else{
            console.log(uploadResponse);
            res.status(500).json(uploadResponse);
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong - image ' });
    }
}

const getImages= async(req,res) =>{
    const { resources } = await cloudinary.search
    .expression('folder:GoTripImages')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

const publicIds = resources.map((file) => file.public_id);
res.send(publicIds);   
}


module.exports = {
    postImages,   
    getImages
}