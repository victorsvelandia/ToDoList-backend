import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        primerNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        segundoNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        primerApellido: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        segundoApellido: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'users',
        timestamps: true,
        underscored: true,
    });
    

    return User;
}