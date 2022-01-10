const argv = require('yargs')
    .options({
        'b': { 
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla'
        },
        'l': {
            alias:'listar',
            type: 'boolean',
            default: false,
            demandOption: true,
            describe: 'Muestra la tabla en la consola'
        },
        'h': {
            alias: 'hasta',
            type: 'string',
            default: 12,
            demandOption: true,
            describe: "Limite de la tabla"
        }
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'No es un numero'
        }
        return true
    })
    .argv;

    module.exports = argv