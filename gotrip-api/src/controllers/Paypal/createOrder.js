const { baseURL } = require("./config");
const { generateAccessToken } = require("./generateToken");
const { PAYPAL_IDCLIENT, PAYPAL_SECRET } = process.env;
const axios = require("axios");

const createOrderPaypal = async () => {
  const auth = { username: PAYPAL_IDCLIENT, password: PAYPAL_SECRET };

  try {
    const body = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "115",
          },
        },
      ],
      application_context: {
        brand_name: "goTrip",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3001/urlPaypal/execute-payment",
        cancel_url: "http://localhost:3001/urlPaypal/cancel-payment",
      },
    };

    const response = await axios.post(
      `${baseURL.sandbox}/v2/checkout/orders/`,
      body,
      { auth }
    );

    return { data: response.data };
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createOrderPaypal,
};
