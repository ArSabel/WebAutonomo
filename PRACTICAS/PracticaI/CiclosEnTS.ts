// Importa el arreglo y la de usuarios desde el archivo arregloEntidad
import  { Usuario,users } from './arregloEntidadEnTS';

// Recorrido con forEach
console.log("Recorrido del arreglo con forEach");
users.forEach(({ name, lName, email }: Usuario) => {
    console.log(`Nombre: ${name}, Apellido: ${lName}, Email: ${email}`);
});

// Recorrido con for...of
console.log("Recorrido del arreglo con for...of");
for (const usuario of users) {
    const { name, lName, email } = usuario;
    console.log(`Nombre: ${name}, Apellido: ${lName}, Email: ${email}`);
}

// Recorrido con while
console.log("Recorrido del arreglo con while");
let i = 0;
while (i < users.length) {
    const { name, lName, email } = users[i];
    console.log(`Nombre: ${name}, Apellido: ${lName}, Email: ${email}`);
    i++;
}
