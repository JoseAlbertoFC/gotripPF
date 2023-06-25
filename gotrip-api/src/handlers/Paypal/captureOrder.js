const { capturePayment } = require("../../controllers/Paypal/carptureOrder");

const captureOrderPaypal = async (req, res) => {
    const  {token, PayerID} = req.query;
  try {
    console.log(token)
    const captureData = await capturePayment(token, PayerID);
    res.status(200).json(captureData);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = {
    captureOrderPaypal,
}
