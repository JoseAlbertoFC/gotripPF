const { PAYPAL_IDCLIENT, PAYPAL_SECRET } = process.env;
const { baseURL } = require("./config")

const generateAccessToken = async () => {
  const auth = Buffer.from(PAYPAL_IDCLIENT + ":" + PAYPAL_SECRET).toString("base64");
  const response = await fetch(`${baseURL.sandbox}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
};

module.exports = {
    generateAccessToken,
}