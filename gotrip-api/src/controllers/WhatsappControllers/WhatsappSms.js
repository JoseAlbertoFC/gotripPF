// Llamamos a las Respuestas de Whatsapp
const automaticResponses = require('../WhatsappControllers/Response')
const twilio = require('twilio');
const accountSid = process.env.WHATSAPP_CLIENT;
const authToken = process.env.WHATSAPP_SECRET;
const client = twilio(accountSid, authToken);



// Funcion para Enviar Mensajes de whatsapp Automatico.
const WhatsappSms = (message, sender) => {

    try {
        if (message === 'hola') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[0].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message === 'habitaciones') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[1].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });

        } else if (message === 'disponibilidad') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[2].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message === 'tarifas') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[3].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message === 'reservar') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[4].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        }
        else if (message === 'cancelar') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[5].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message === 'ayuda') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[6].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message === 'adios') {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[7].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        } else if (message) {
            const mensagge = client.messages.create({
                from: 'whatsapp:+14155238886',
                to: sender,
                body: automaticResponses[8].response
            }).then((mensagge) => {
                console.log('Respuesta enviada con éxito.');
            }).catch((err) => {
                console.error('Error al enviar la respuesta:', err);
            });
        }
        
        return message
    } catch (error) {
        throw new Error  ({ error: error.message })
        
    }

}
    module.exports = WhatsappSms;



   
