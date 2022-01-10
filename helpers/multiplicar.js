const fs = require('fs');
const colors = require('colors')
const crearArchivo = (base = 5, limite = 12, listar) =>{
    
    return new Promise((resolve, reject) => {

        

        let salida = '';

        for(let i = 1; i <= limite; i++){
            salida += `${base} x ${i} = ${base * i} \n`
        }
        if(listar){
            console.log(` Tabla del ${base} `.random)
            console.log(salida.random)
        }
        try{
            fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida)
        }catch(err){
            reject(err)
        }
        
        resolve(`Tabla-${base}.txt`)
    })
    
}

module.exports = {
    crearArchivo
}