const mercadopago = require("mercadopago")

const WEBHOOK_PAGO = async (payment,id) => {
    try {
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(id)
            console.log(data.body)
        }
        
        return ({HOOK:"Enviado"})
    } catch (error) {
        throw new Error({ error: error.message });
        
    }
   

}

module.exports = WEBHOOK_PAGO