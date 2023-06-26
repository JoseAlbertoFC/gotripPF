const voucher = require("./data.json")

console.log(voucher.purchase_units[0].payments.captures[0].create_time)

// const paypalPay = {
//     amount: data.purchase_units[0].payments.captures[0].amount.value,
//     currentOperation: data.purchase_units[0].payments.captures[0].amount.currency_code,
//     paymentDate: data.status,
//     idpay: data.id,
//     orderNumber: data.payment_source.paypal.account_status,
//     net_recived_amount: data..purchase_units[0].payments.captures[0].seller_receivable_breakdown.net_amount.value,
//     data_aprove: data.purchase_units[0].captures[0].create_time,
// 
//     ip: "null", 
//     paymentStatus: "null",
//     orderType: "null",
//     operationType: "null",
//     metodo: "null",
//     total_paid_amount: "null",
//     userId: "4ebb4e3d-00bb-4765-8159-db3caae45ec9",
//     bookingId: "514db21d-c4c5-4266-aee2-b2ed58fc335b" 
//   } 