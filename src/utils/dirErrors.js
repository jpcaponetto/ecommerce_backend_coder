export default {
  userError: 1,
  requieredFieldsError: 2,
  outError: 3, // cuando las credenciales no funcionan ✅
  dataBaseError: 4, // cuando nos intentamos conectar a mongo ✅
  routingError: 5, // usuario quiere hacer una peticion a un route que no existe
  badRequestError: 6, // cliente hace solicitud erronea
  internalServerError: 7, // a nivel de servidor, la que está en el default
};
