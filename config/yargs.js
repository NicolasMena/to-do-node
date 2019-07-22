const description = {
    demand:true,
    alias:'d',
    desc:"Descripción de la tarea por hacer"
}
const completed = {
    default:true,
    alias:'c',
    desc:"Marca como completado o pendiente la tarea por hacer"
}

const argv = require('yargs')
                .command('list','Muestra las tareas por hacer')
                .command('create','Crea una nueva tarea por hacer',{description})
                .command('update','Actualiza una tarea por hacer',{description,completed})
                .command('delete','Elimina una nueva tarea por hacer',{description})
                .help()
                .argv;

module.exports = {
    argv
}