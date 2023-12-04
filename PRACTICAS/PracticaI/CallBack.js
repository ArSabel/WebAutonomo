const users = require('./arregloEntidad.js')

const buscarUsuarioPorId = (arr, id, callback) => {
    const usuarioEncontrado = arr.find((usuario) => usuario.email === id);
    if (usuarioEncontrado) {
        callback(usuarioEncontrado);
    } else {
        console.log("Usuario no encontrado");
    }
};
const mostrarUsuario = (usuario) => {
    console.log("Usuario encontrado:");
    console.log(usuario);
};

const idBuscado = "mmm123c@gmil.com";
buscarUsuarioPorId(users, idBuscado, mostrarUsuario);