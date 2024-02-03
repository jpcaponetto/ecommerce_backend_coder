export const requieredFields = (body) => {
  return `Todos los campos son requeridos
  firstName: ${body.firstName} 
  lastName:${body.lastName} 
  Email:${body.email} 
  age:${body.age}`;
};

export const outError = (code) => {
  switch (code) {
    case 401:
      return "Necesitas estar autenticado para acceder a este recurso.";

      break;
    case 403:
      return "No tienes autorización para acceder a este recurso";
      break;
  }
};

export const dataBaseError = () => {
  return "Hubo un problema al conectarse a la base de datos. Verifica que esté bien la conexión o las credenciales";
};

export const routingError = () => {
  return "Estás tratando de acceder a una ruta no definida ";
};

export const badRequestError = () => {
  return "La solicitud es invalida";
};

export const internalServerError = () => {
  return "Ha ocurrido un error desconocido ";
};
