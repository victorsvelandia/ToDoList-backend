import sequelize from "../config/sequelize.js";

//Import models
import UserModel from "./user.js";


// Initialization models

const models = {
    User: UserModel(sequelize) 
};

// Relations
// User with Task


export default models;
