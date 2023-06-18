const { Destination, Hotel } = require("../../db");

const api = require("../../../api/apiHotels.json");

const getDestinationById = async (id) => {
    console.log(id);
    try{
  if (isNaN(id)) {
    const bdId = await Destination.findByPk(id, {
      include: { model: Hotel, as: "hotel", attributes: ["name"] },
    });
    return bdId;
  } else if(!isNaN(id)){
    
    const prettierInfo = api.map((hotel)=>{
      return {
        id: hotel.country_id,
        country: hotel.country,
        state: hotel.state,
        city: hotel.city,
        moneyType: hotel.rates_currency,
        status: hotel?true: false,
    }
    })
    const apiId = prettierInfo.find((hotel)=> hotel.id == id)
    return apiId;
  }
}catch(err){
    throw Error(err.message);
}
};

module.exports={getDestinationById};
