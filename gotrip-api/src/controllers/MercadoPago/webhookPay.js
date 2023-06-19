const mercadopago = require("mercadopago")



const WEBHOOK_PAGO = async (payment,id,bookingId,userId) => {
    try {
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(id)
             dataPay = {
                ip:data.body.additional_info.ip_address,
                idpay:data.body.id,
                order:data.body.order.id,
                orderType:data.body.order.type,
                operationType:data.body.operation_type,
                metodo:data.body.payment_method_id,
                currentOperation:data.body.currency_id,
                data_aprove:data.body.date_approved,
                total_paid_amount:data.body.transaction_details.total_paid_amount,
                net_received_amount:data.body.transaction_details.net_received_amount,
                userId:userId,
                bookingId:bookingId
                
            }
            
        
            // return dataPay
            
        }
        
        return dataPay
    } catch (error) {
        throw new Error({ error: error.message });
        
    }
   

}

module.exports = WEBHOOK_PAGO