import { DataTypes } from "sequelize";

export default (sequelize) => {
    const EntryExit = sequelize.define('EntryExit', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        entryTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        exitTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        idFee: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'fees', 
                key: 'id',
            },
        },
        idVehicle: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'vehicles', 
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
        idEntryUser: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'id',
            },
        },
        idExitUser: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'id',
            },
        },
    }, {
        tableName: 'entry_exits',
        timestamps: true,
        underscored: true,
    });

    return EntryExit;
}