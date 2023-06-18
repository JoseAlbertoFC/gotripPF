const {Gallery} = require('../../db');

const deleteGallery = async(idToObliterate)=>{
    if(idToObliterate){
        await Gallery.destroy({
            where: {id: idToObliterate}
        });
    } else return 'Send an Id that you want to unable please';
}

module.exports= {deleteGallery};