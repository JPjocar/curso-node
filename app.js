
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
console.clear()



// const [, , arg3 = 'base3=4'] = process.argv;
// const [ , num = 6] = arg3.split('=');
// console.log(num)

crearArchivo( argv.b, argv.h, argv.l ).then( (nombreArchivo)=> {
    console.log(nombreArchivo)
}).catch((err)=>{
    console.log(err)
})



// const usuarios = [
//     {
//         id: 1, nombre: 'Jocar', profesion_id: 1
//     },
//     {
//         id: 2, nombre: 'Jocar', profesion_id: 2
//     },
//     {
//         id: 3, nombre: 'Jocar', profesion_id: 1
//     },
//     {
//         id: 4, nombre: 'Jocar', profesion_id: 2
//     },
// ]
// const profesion = {
//     1: 'programador',
//     2: 'desarrollador'
// }

// const getUsuarios = (callback) => {
//     setTimeout(() => {
//         callback()
//     }, 2000);
// }

// const getUsuario = (id, callback) =>{
//     const usuario = usuarios.find((usuario)=>{
//         return usuario.id === id;
//     })
//     callback(usuario);
// }

// const getProfesion = (usuario, callback) =>{
//     callback(`${usuario.nombre} es ${profesion[usuario.profesion_id]}`)
// }

// getUsuarios(()=>{
//     getUsuario(3, (usuario)=>{
//         getProfesion(usuario, (text)=>{
//             console.log(text)
//         })
//     })
// })

