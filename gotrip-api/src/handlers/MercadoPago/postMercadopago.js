const ORDEN_PAGO = require("../../controllers/MercadoPago/ordenPay");

const payment = async (req, res) => {
  const reserva = req.body.reserva;
  const bookingId = req.body.bookingId;
  const userId = req.body.userId;
  const name = req.body.name;
  const email = req.body.email;

  try {
    const result = await ORDEN_PAGO({reserva, bookingId, userId, email, name});

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { payment };
