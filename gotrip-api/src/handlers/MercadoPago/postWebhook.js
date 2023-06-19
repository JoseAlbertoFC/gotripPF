const WEBHOOK_PAGO = require("../../controllers/MercadoPago/webhookPay")



const webhook = async (req,res) => {
  const payment = req.query
  const id = req.query['data.id']
  const userId = req.query['userId']
  const bookingId = req.query['bookingId']
  
 
  
  try {

    const result = await WEBHOOK_PAGO(payment,id,userId,bookingId)

    

    


    

      res.status(200).json(result)

    
  
   
    
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={webhook}