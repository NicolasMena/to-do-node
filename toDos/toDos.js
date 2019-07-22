const fs = require('fs');
let toDoList = [];

const loadDB = () => {

    try {
        toDoList = require("../db/data.json");
    } catch (error) {
        toDoList = []
    }
}

const createToDo = (description) => {

    loadDB();
    let toDo = {
        description,
        completed: false
    }
    toDoList.push(toDo)
    saveDB();
    return toDo;
}



const saveDB = () => {
   
    let data = JSON.stringify(toDoList);
    fs.writeFile(__dirname + '/../db/data.json', data, (err) => {
        if (err) return(err);
        else{
            return ('ToDo created sucessfully')
        }
        }); 
}

const getList = () =>{
     loadDB();
     return toDoList
}

const updateToDo = (description, completed = true) => {
    loadDB();
    let index = toDoList.findIndex( toDo => toDo.description === description )
    if(index>=0){
        toDoList[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }
}


const deleteToDo = (description) => {
    loadDB();
    let newToDoList = toDoList.filter( toDo => toDo.description !== description)
    if(toDoList.length === newToDoList.length){
        return false;
    }else{
        toDoList = newToDoList;
        saveDB();
        return true;
    }
}

module.exports = {
 createToDo,
 getList,
 updateToDo,
 deleteToDo
}