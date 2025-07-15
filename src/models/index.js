import sequelize from "../config/sequelize.js";

//Import models
import UserModel from "./user.js";
import TaskModel from "./task.js";


// Initialization models

const models = {
    User: UserModel(sequelize),
    Task: TaskModel(sequelize), 
};


// Relations

// User with Task


export default models;
