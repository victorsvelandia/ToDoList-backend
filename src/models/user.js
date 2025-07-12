import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        secondName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        secondlastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idDocumentType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idDocumentNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
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
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'blocked'),
            allowNull: false,
            defaultValue: 'active',
        },
        idRole: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'roles', 
                key: 'id',
            },
        },
        idCompany: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'companies', 
                key: 'id',
            },
        },
    }, {
        tableName: 'users',
        timestamps: true,
        underscored: true,
    });
    

    return User;
}