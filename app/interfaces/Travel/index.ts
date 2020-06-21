//Asiento
interface ISeat {
  name : string,
  available : boolean,
  client : string
}

//Tiempo y Fecha de llegada / salida
interface IBusDateTime {
  date : string,
  time : string
}

//Datos de la DB respecto al tiempo
interface IBusDateTimeData {
  arrivalDate : IBusDateTime,
  departureDate : IBusDateTime
}

//Datos de la DB respecto a los paraderos
interface IBusStopData {
  name : string,
  coords : any,
  reached : boolean,
  time : string
}

//Image
interface IImage {
  url : string,
  name : string
}

//Datos de la DB respecto al lugar destino
interface ITravelData {
  name : string,
  image : IImage,
  description : string,
  region : string,
  coords : any
}

export {
  ISeat,
  ITravelData,
  IBusStopData,
  IBusDateTimeData
}