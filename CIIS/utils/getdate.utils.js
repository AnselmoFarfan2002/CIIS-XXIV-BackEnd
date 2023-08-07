// const toJSONLocal=(date)=> {
//     let local = new Date(date);
//     local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
//     return local.toJSON().slice(0, 10);
// }
// const getDateTime=()=>{
//     const d=new Date();
//     const date=toJSONLocal(d);
//     const hour=d.toLocaleTimeString('es-PE');
//     return date+' '+hour;
// }

const getDateTime=()=> {
  const timeZoneOffset = -5 * 60 * 60 * 1000;
  const dateMilliseconds = new Date().getTime();
  const currentTimePeru = new Date(dateMilliseconds + timeZoneOffset);
  const anio = currentTimePeru.getFullYear();
  const mes = String(currentTimePeru.getMonth() + 1).padStart(2, "0");
  const dia = String(currentTimePeru.getDate()).padStart(2, "0");
  const horas = String(currentTimePeru.getHours()).padStart(2, "0");
  const minutos = String(currentTimePeru.getMinutes()).padStart(2, "0");
  const segundos = String(currentTimePeru.getSeconds()).padStart(2, "0");

  const datetimeFormat = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

  return datetimeFormat;
}

const getDate=()=>{
  const timeZoneOffset = -5 * 60 * 60 * 1000;
  const dateMilliseconds = new Date().getTime();
  const currentTimePeru = new Date(dateMilliseconds + timeZoneOffset);
  const anio = currentTimePeru.getFullYear();
  const mes = String(currentTimePeru.getMonth() + 1).padStart(2, "0");
  const dia = String(currentTimePeru.getDate()).padStart(2, "0");

  const dateFormat=`${anio}-${mes}-${dia}`;

  return dateFormat;
}

module.exports = {
  getDateTime,
  getDate
};
