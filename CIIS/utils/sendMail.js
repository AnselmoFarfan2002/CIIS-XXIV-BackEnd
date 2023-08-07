const { configoAuth2 } = require("../config/nodemailer");
const sendMail = async (email, subject, content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transporter = await configoAuth2();
      const mailOptions = {
        from: "Pre-registro al PostMaster <noreply.test.ciis@gmail.com>",
        to: email,
        subject,
        html: content,
      };

      await transporter.sendMail(mailOptions);
      resolve();
    } catch (error) {
      reject({
        code: 400,
        message: "Error al enviar el correo de preinscripción!",
        sendMailFailed: true,
      });
    }
  });
};

module.exports = sendMail;
