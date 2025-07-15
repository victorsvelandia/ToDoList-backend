import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Task = sequelize.define('Task', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        tituloTarea: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        idUser: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'id',
            },
        },
    }, {
        tableName: 'tasks',
        timestamps: true,
        underscored: true,
    });
    

    return Task;
}