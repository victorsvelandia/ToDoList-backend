import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define('Task', {
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
        }
    }, {
        tableName: 'tasks',
        timestamps: true,
        underscored: true,
    });
    

    return User;
}