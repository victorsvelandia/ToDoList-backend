import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Rol = sequelize.define('Rol', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'roles',
        timestamps: true,
        underscored: true,
    });

    return Rol;
}