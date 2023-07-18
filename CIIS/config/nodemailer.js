const nodemailer=require("nodemailer");
const {google}=require("googleapis");
const {secret_key}=require("./development")

const configoAuth2=()=>{
    const oauth2Client=new google.auth.OAuth2(
        secret_key.client_id,
        secret_key.client_secret_key,
        'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({refresh_token:secret_key.refresh_token_email});

    const accessToken=oauth2Client.getAccessToken();

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAuth2",
            user:"noreply.test.ciis@gmail.com",
            clientId:secret_key.client_id,
            clientSecret:secret_key.client_secret_key,
            refreshToken:secret_key.refresh_token_email,
            accessToken:accessToken
        },
    });

    return transporter;
}
module.exports={
    configoAuth2,
}