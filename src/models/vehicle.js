import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Vehicle = sequelize.define('Vehicle', {
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
        idTypeVehicle: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'type_vehicles', 
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
        tableName: 'vehicles',
        timestamps: true,
        underscored: true,
    });

    return Vehicle;
}