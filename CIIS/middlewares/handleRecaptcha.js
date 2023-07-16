const axios=require("axios").default;
const {secret_key:{
    recaptcha_key
}}=require("../config/development");
const { handleErrorResponse } = require("./handleError");
const handleRecaptcha=(req,res,next)=>{
    try {
        const recaptchaValue = req.body["g-recaptcha-response"] ? req.body["g-recaptcha-response"] : ""
        axios("https://www.google.com/recaptcha/api/siteverify", {
            secret: recaptcha_key,
            response: recaptchaValue
        }).then(data=>{
            if(data.success) return next();
        
            handleErrorResponse(res,"Recaptcha verification failed!",400);
        }).catch(err=>{
            handleErrorResponse(res,{err, msg: "Invalid Recaptcha"},400);
            return;
        })
    } catch (error) {
        console.log(error);
        handleErrorResponse(res,"Error",400);
        return;
    }
}

module.exports=handleRecaptcha;