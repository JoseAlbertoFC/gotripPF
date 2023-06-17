const PENDIENTE_PAGO = require("../../controllers/MercadoPago/pendingPay")

const pending = async (req,res) => {
  try {

    const result = await PENDIENTE_PAGO()
    
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={pending}