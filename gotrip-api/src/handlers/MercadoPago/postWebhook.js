const WEBHOOK_PAGO = require("../../controllers/MercadoPago/webhookPay");

const webhook = async (req, res) => {
  const payment = req.query;
  const id = req.query["data.id"];
  const userId = req.query["userId"];
  const bookingId = req.query["bookingId"];
  const name = req.query["name"];
  const email = req.query["email"];

  try {
    const result = await WEBHOOK_PAGO({
      payment,
      id,
      userId,
      bookingId,
      email,
      name,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { webhook };
