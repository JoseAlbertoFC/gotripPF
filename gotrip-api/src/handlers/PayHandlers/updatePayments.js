const { updatePay } = require("../../controllers/PayControllers/updatePay");


// Porfa crea un archivo para cada handler
const updatedataPay = async (req,res) => {
  const id  = req.params.id;
const {   
  amount,paymentDate,paymentStatus
 } = req.body;


  
  

  try {

    const result = await updatePay({id,amount,paymentDate,paymentStatus});
    
    if(result === null) return  res.status(404).json({ error: 'Pago no encontrado.' }) 
    

    res.status(200).json(result);
   
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={updatedataPay}