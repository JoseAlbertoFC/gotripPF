// Aqui va el modelo Destination.

const{DataTypes, UUIDV4}=require('sequelize');

module.exports =(sequelize)=>{
sequelize.define('Destination', {
id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
},
country:{
    type: DataTypes.STRING,
    allowNull :false,
    
},
state:{
    type:DataTypes.STRING,
    allowNull: false,
    
},
city:{
    type: DataTypes.STRING,
    validate:{
        notEmpty: true,
    }
},
moneyType:{
    type: DataTypes.ENUM("USD", "EUR", "MXN"),
    allowNull: false,
},
status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
}
}, {timestamps: false})
}

