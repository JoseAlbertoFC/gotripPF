const SUCCES_PAGO = require("../../controllers/MercadoPago/succesPay")

const succes = async (req,res) => {
  try {

    const result = await SUCCES_PAGO()
    
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={succes}