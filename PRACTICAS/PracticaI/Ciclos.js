//Se importa el arreglo 
//del archivo arregloEntidad
const users = require('./arregloEntidad.js')

//recorrido foreach
console.log("Recorrido del arreglo con forEach")

users.forEach(({ name, lName, email }) => {
    //muestra el nombre, el apellido y el correo
    //de los usuarios que se encuentran en el arreglo de users
    console.log(`Nombre: ${name}, Apellido: ${lName}, Email: ${email}`);
});

// bucle con for of 
console.log("Recorrido del arreglo con for...in");
// se realiza un bucle for of para recorrer los elementos 
for (const usuario of users) {
    //desestructuracion para sacar las propiedades requeridas
    const { name, lName, email } = usuario;
    console.log(`Nombre: ${name}, Apellido: ${lName}, Email: ${email}`);
}


console.log("Recorrido del arreglo con while");
let i = 0;
while (i < users.length) {
    const usuario = users[i];
    console.log(`Nombre: ${usuario.name}, Apellido: ${usuario.lName}, Email: ${usuario.email}`);
    i++;
}
