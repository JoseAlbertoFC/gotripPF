const {Gallery, Hotel} = require('../../db');

const getById = async(id)=>{
    try{
if(!id) return 'Hey, next time, send an identificator please'
    
    const bdGallery = await Gallery.findByPk(id, 
            {include:[
                {model: Hotel, as: 'hotel', attributes: ['name']},
                { model: Room,  as:'room',  attributes:['id', 'room']}
            ]                
        } );
    // console.log(bdGallery);
     return bdGallery;
    }catch(err){
        throw Error({error: err.message})
    }
}

module.exports={getById};