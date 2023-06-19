const ORDEN_PAGO = require("../../controllers/MercadoPago/ordenPay")

const payment = async (req,res) => {
  const carrito = req.body.carrito
  const bookingId = req.body.bookingId
  const userId = req.body.userId
 
 
  

  try {

    const result = await ORDEN_PAGO(carrito,bookingId,userId)
    
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={payment}