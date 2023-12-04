// Define una interfaz para la estructura de los objetos de usuario
export interface Usuario {
    email: string;
    password: string;
    name: string;
    lName: string;
    phone: string;
  }
  
  // Arreglo de usuarios basado en la entidad de la base de datos del modelo relacional
  export const users: Usuario[] = [
    {
      email: "mmm123a@gmil.com",
      password: "1234a",
      name: "Raul",
      lName: "Alvarez",
      phone: "123456781",
    },
    {
      email: "mmm123b@gmil.com",
      password: "1234b",
      name: "Maria",
      lName: "Acosta",
      phone: "123456782",
    },
    {
      email: "mmm123c@gmil.com",
      password: "1234c",
      name: "Liliana",
      lName: "Acosta",
      phone: "123456783",
    },
    {
      email: "mmm123d@gmil.com",
      password: "1234d",
      name: "Mario",
      lName: "Martinez",
      phone: "123456784",
    },
    {
      email: "mmm123e@gmil.com",
      password: "1234e",
      name: "Martha",
      lName: "Suarez",
      phone: "123456785",
    },
  ];
  

  