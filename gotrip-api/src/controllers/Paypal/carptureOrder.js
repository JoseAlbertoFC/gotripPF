const { generateAccessToken } = require("./generateToken");
const { baseURL } = require("./config");
const { Pay } = require("../../db")
const voucher = require("./data.json")

const capturePayment = async (token) => {
  console.log("**********************************")
  console.log(token)
  const accessToken = await generateAccessToken();
  const url = `${baseURL.sandbox}/v2/checkout/orders/${token}/capture`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  
  const paypalPay = new Pay ({
    amount: data.purchase_units[0].payments.captures[0].amount.value,
    currentOperation: data.purchase_units[0].payments.captures[0].amount.currency_code,
    paymentDate: data.status,
    orderNumber: data.payment_source.paypal.account_status,
    net_received_amount: data.purchase_units[0].payments.captures[0].seller_receivable_breakdown.net_amount.value,
    data_aprove: data.purchase_units[0].payments.captures[0].create_time,
    
    idpay: 0,
    ip: "null", 
    paymentStatus: "null",
    orderType: "null",
    operationType: "null",
    metodo: "null",
    total_paid_amount: "null",
    userId: "4ebb4e3d-00bb-4765-8159-db3caae45ec9",
    bookingId: "514db21d-c4c5-4266-aee2-b2ed58fc335b" 
  })
  console.log(paypalPay)
  const save = await paypalPay.save()
  return save
};

module.exports = {
  capturePayment,
};


