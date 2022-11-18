const nodemailer = require("nodemailer")
const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "44f818d2c9075b",
          pass: "c4642bee012fe9"
        }
      });
      const mensaje = {
        from: "Restaurante Delicias Italianas <noreply@deciliasitalianas.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje 
      }

      await transport.sendMail(mensaje)
}

module.exports = sendEmail;