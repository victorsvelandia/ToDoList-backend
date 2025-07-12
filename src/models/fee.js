import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Fee = sequelize.define('Fee', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        validFrom: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        validUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        idTypeFee: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'types_fees', 
                key: 'id',
            },
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
        tableName: 'fees',
        timestamps: true,
        underscored: true,
    });
    return Fee;
}