import { DataTypes } from "sequelize";

export default (sequelize) => {
    const TypeVehicle = sequelize.define('TypeVehicle', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        register: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        descriptionType: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: 'type_vehicles',
        timestamps: true,
        underscored: true,
    });

    return TypeVehicle;
};