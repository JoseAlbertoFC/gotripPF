// Libreria a utilizar para el envio de correos automatico
const nodemailer = require("nodemailer");

// Dany trabajar en la coneccion de la data de usurio para llenar los campos de name ,from, to ,subjet

const envioCorreo = async (result) => {
    try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_CORREO,
        pass: process.env.USER_PASS_CORREO,
      },
      secure: true, // Habilitar la conexión segura
    });

    const name = `${result.name}`;
    const mailOptions = {
      from: "hoteldeveloperfull@gmail.com",
      to: `${result.email}`,
      subject: "Comprobante de pago",
      html: `
      <head>
        <title>Recibo de Pago - Hotel Reserva</title>
        <style>
            /* Estilos CSS para el recibo de pago */
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
            }
            h1, h2 {
                text-align: center;
            }
            .info {
                margin-bottom: 20px;
            }
            .info p {
                margin: 5px 0;
            }
            .table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            .table th, .table td {
                padding: 8px;
                border: 1px solid #ccc;
            }
            .table th {
                background-color: #f0f0f0;
                text-align: left;
            }
            .total {
                text-align: right;
            }
    
            /* Estilos CSS para la imagen */
            .image-container {
                text-align: center;
                margin-bottom: 20px;
            }
            .image-container img {
                max-width: 100%;
                height: auto;
                border: 1px solid #ccc;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Recibo de Pago</h1>
           
                 <p><strong>Hotel Reserva</strong></p>
                <p>Dirección del hotel, Ciudad</p>
                <p>Teléfono: 123-456789</p>
                <p>Gracias port tu Reserva ${name}</p>
           
            <h2>Detalles de la Reserva</h2>
            <table class="table">
                 <thead>
                    <tr>
                        <th>No.</th>
                        <th>Orden de Pago</th>
                        <th>Metodo de pago</th>
                        <th>Tipo de pago</th>
                        <th>Status de Pago</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${result.idpay}</td>
                        <td>${result.order}</td>
                        <td>${result.orderType}</td>
                        <td>${result.operationType}</td>
                        <td>${result.data_aprove}</td>
                        <td>${result.total_paid_amount}</td>
                    </tr>
                </tbody>
            </table>
            <div class="total">
                <!-- Total a pagar -->
            </div>
    
            <!-- Agregar la imagen -->
            <div class="image-container">
                <img src="https://invisionstudio.com/wp-content/uploads/2015/06/Hotels-360-Tours-Property-Photography-Architecural-Photography-Hotel-Photography.jpg" alt="Imagen del hotel">
            </div>
        </div>
    </body>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.log(error);
        return
      } else {
        console.log("Correo enviado: " + info.response);
        return 
      }
    });
    return
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { envioCorreo };
