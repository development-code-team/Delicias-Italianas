const nodemailer = require("nodemailer")
const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "deliciasitalianas@outlook.com",
          pass: "ykwtmaunhvpimyzx"
        }
      });
      const mensaje = {
        from: "Restaurante Delicias Italianas <deliciasitalianas@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje 
      }

      await transport.sendMail(mensaje)
}

module.exports = sendEmail;