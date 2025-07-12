import { DataTypes } from "sequelize";

export default (sequelize) => {
    const TypeFee = sequelize.define('TypeFee', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        descrip_type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        tableName: 'types_fees',
        timestamps: true,
        underscored: true,
    });

    return TypeFee;
}