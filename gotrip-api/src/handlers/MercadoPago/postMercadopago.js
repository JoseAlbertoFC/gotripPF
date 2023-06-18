const ORDEN_PAGO = require("../../controllers/MercadoPago/ordenPay")

const payment = async (req,res) => {
  const carrito = req.body.carrito
  

  try {

    const result = await ORDEN_PAGO(carrito)
    
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={payment}