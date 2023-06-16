const { readpay } = require("../../controllers/PayControllers/readPay")

// Porfa crea un archivo para cada handler
const readallPays = async (req,res) => {
  
  

  try {

    const result = await readpay();

    if(result.length === 0) return res.status(404).json({menssage:"Lo siento No existen Pagos"})

    res.status(200).json(result);
   
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={readallPays}