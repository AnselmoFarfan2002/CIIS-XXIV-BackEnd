const axios=require("axios").default;
const {secret_key:{
    recaptcha_key
}}=require("../config/development");
const { handleErrorResponse } = require("./handleError");
const handleRecaptcha=(req,res,next)=>{
    try {
        const {recaptchaValue=''}=req.body
        axios({
            url:`http://wwww.google.com/recaptcha/api/siteverify?secret=${recaptcha_key}&response=${recaptchaValue}`,
            method:'POST'
        }).then(data=>{
            if(!data.sucess){
                handleErrorResponse(
                    res,"Recaptcha verification failed!",400);
                return;
            }
            next();
        }).catch(err=>{
            handleErrorResponse(res,"Invalid Recaptcha",400);
            return;
        })
    } catch (error) {
        console.log(error);
        handleErrorResponse(res,"Error",400);
        return;
    }
}

module.exports=handleRecaptcha;