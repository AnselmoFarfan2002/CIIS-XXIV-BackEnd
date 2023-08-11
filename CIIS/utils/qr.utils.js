const { toCanvas} = require("qrcode");
const { createCanvas } = require('canvas');
const { sendQR } = require("./body.email");
const sendMailImage = require("./send.mail.image");


const sendQRToEmail = async (users) => {
    return new Promise(async(resolve, reject) => {
        try {
          users.forEach(async (user) => {
            try {
      
              const canvas = createCanvas(800, 800);
              await toCanvas(canvas, user.code, { errorCorrectionLevel: 'H',width: 600 });
              const qrImageData = canvas.toBuffer();
      
               const mailOptions = {
                  from: 'XX POSTMASTER <noreply.test.ciis@gmail.com>',
                  to: user.email,
                  subject: sendQR.subject,
                  html:sendQR.content,
                  attachments: [
                    {
                      filename: 'qr_code.png',
                      content: qrImageData
                    }
                  ]
                };
                await sendMailImage(mailOptions);
            } catch (error) {
              console.log("Error al enviar correo");
              console.log(error);
            }
          });
          resolve();

        } catch (error) {
          reject(error);
      }
    })
};

module.exports = {
  sendQRToEmail
};
