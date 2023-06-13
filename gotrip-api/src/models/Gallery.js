// Aqui va el modelo Gallery.

const {DataTypes}= require('sequelize');

module.exports= (sequelize)=>{
    sequelize.define('Gallery', {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
        },
        urlIMG:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl: true,
            }
        }
    }, {timestamps: false})
}

