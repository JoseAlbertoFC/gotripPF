const { createOrderPaypal } = require("../../controllers/Paypal/createOrder");

const postOrderPaypal = async (req, res) => {
  try {
    const order = await createOrderPaypal();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = {
    postOrderPaypal,
}
