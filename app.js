
const argv = require('./config/yargs').argv;
const toDos = require('./toDos/toDos');
const colors = require('colors');

let command = argv._[0];


switch(command){
    case 'create':
        let newToDo = toDos.createToDo(argv.description)
        console.log(newToDo);
        break;
    case 'list':
        let listToDos = toDos.getList();
        for (let toDo of listToDos){
            console.log('======ToDo======='.green);
            console.log(toDo.description);
            console.log(`Estado: ${toDo.completed}`);
            console.log('=================='.green);
        }
        break;
    case 'update':
        let updateTodo = toDos.updateToDo(argv.description);
        console.log(updateTodo);
        break;
    case 'delete':
        let deleteToDo = toDos.deleteToDo(argv.description);
        console.log(deleteToDo);
        break;
    default:
        console.log('Comando no reconocido');
}