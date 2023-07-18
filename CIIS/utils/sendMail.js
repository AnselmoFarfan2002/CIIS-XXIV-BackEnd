const {configoAuth2}=require('../config/nodemailer')
const transporter=configoAuth2();
const sendMail=async(email,subject,content)=>{
    try {
        const mailOptions={
            from:"Pre-registro al PostMaster <noreply.test.ciis@gmail.com>",
            to:email,
            subject,
            html:content
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error({code:400,message:"Error al enviar el correo de preinscripción!",sendMailFailed:true});
    }
}

module.exports=sendMail;