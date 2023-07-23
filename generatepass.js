const {encrypt}=require("./CIIS/utils/password.utils");

const generar=async(password)=>{
    const passhash=await encrypt(password);
    console.log(passhash)
}

console.log(generar("alvaro2001"));