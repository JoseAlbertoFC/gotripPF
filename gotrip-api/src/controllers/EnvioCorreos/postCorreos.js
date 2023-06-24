const nodemailer = require('nodemailer');

const envioCorreo = async (

  result




) => {
  console.log(result)
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hoteldeveloperfull@gmail.com',
        pass: ''
      },
        secure: true, // Habilitar la conexión segura
      tls: {
        rejectUnauthorized: false // Opción para permitir certificados autofirmados en desarrollo. Remueve esta línea en producción.
      }
    });
    
    const name = "nodemailer"
    const mailOptions = {
      from: 'hoteldeveloperfull@gmail.com',
      to: 'mcdany996@gmail.com',
      subject: 'Comprobante de pago',
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
                <p>${name}</p>
           
            <h2>Detalles de la Reserva</h2>
            <table class="table">
                 <thead>
                    <tr>
                        <th>Fecha de Check-In</th>
                        <th>Fecha de Check-Out</th>
                        <th>Habitación</th>
                        <th>Precio por Noche</th>
                        <th>Noches</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fecha Check-In</td>
                        <td>Fecha Check-Out</td>
                        <td>Tipo de Habitación</td>
                        <td>Precio por Noche</td>
                        <td>Noches</td>
                        <td>Total</td>
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
      `
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
   
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { envioCorreo };
