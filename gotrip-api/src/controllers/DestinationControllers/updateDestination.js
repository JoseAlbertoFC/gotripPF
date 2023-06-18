const {Destination}= require('../../db');

const updateDestination= async(info)=>{
    const {id, country, state, city, moneyType, status}= info;
    const updateDestiny = await Destination.update({
country,
state,
city, moneyType, status
    },{
    where: {id: id}
    })
console.log(updateDestiny);
    return updateDestiny;
}

module.exports = {updateDestination};