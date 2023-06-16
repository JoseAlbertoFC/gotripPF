const { newPay } = require("../../controllers/PayControllers/postPAy")

const paymentNew = async (req,res) => {
  const {amount,paymentDate,paymentStatus} = req.body
  

  try {

    const result = await newPay(amount,paymentDate,paymentStatus)
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={paymentNew}