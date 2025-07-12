import sequelize from "../config/sequelize.js";

//Import models
import UserModel from "./user.js";
import RolModel from "./rol.js";
import CompanyModel from "./company.js";
import VehicleModel from "./vehicle.js";
import TypeVehicleModel from "./typeVehicle.js";
import typeFeeModel from "./typeFee.js";
import FeeModel from "./fee.js";
import EntryExitModel from "./entryExit.js";

// Initialization models

const models = {
    User: UserModel(sequelize),
    Rol: RolModel(sequelize),
    Company: CompanyModel(sequelize),
    Vehicle: VehicleModel(sequelize),
    TypeVehicle: TypeVehicleModel(sequelize),
    TypeFee: typeFeeModel(sequelize),
    Fee: FeeModel(sequelize),
    EntryExit: EntryExitModel(sequelize), 
};

// Relations
// User with Rol
models.Rol.hasMany(models.User, {foreignKey: 'rolId'});
models.User.belongsTo(models.Rol, {foreignKey: 'rolId'});

// User with Company
models.Company.hasMany(models.User, {foreignKey: 'companyId'});
models.User.belongsTo(models.Company, {foreignKey: 'companyId'});

// TypeVehicle with Company
models.TypeVehicle.belongsTo(models.Company, {foreignKey: 'companyId'});
models.Company.hasMany(models.TypeVehicle, {foreignKey: 'companyId'});

// TypeFee with Company
models.TypeFee.belongsTo(models.Company, {foreignKey: 'companyId'});
models.Company.hasMany(models.TypeFee, {foreignKey: 'companyId'});

// Fee with Company
models.Fee.belongsTo(models.Company, {foreignKey: 'companyId'});
models.Company.hasMany(models.Fee, {foreignKey: 'companyId'});

// Fee with TypeFee
models.Fee.belongsTo(models.TypeFee, {foreignKey: 'idTypeFee'});
models.TypeFee.hasMany(models.Fee, {foreignKey: 'idTypeFee'});

// Fee with TypeVehicle
models.Fee.belongsTo(models.TypeVehicle, {foreignKey: 'idTypeVehicle'});
models.TypeVehicle.hasMany(models.Fee, {foreignKey: 'idTypeVehicle'});

// EntryExit with fee
models.EntryExit.belongsTo(models.Fee, {foreignKey: 'idFee'});
models.Fee.hasMany(models.EntryExit, {foreignKey: 'idFee'});

// EntryExit with Vehicle
models.EntryExit.belongsTo(models.Vehicle, {foreignKey: 'idVehicle'});
models.Vehicle.hasMany(models.EntryExit, {foreignKey: 'idVehicle'});

// EntryExit with Company
models.EntryExit.belongsTo(models.Company, {foreignKey: 'idCompany'});
models.Company.hasMany(models.EntryExit, {foreignKey: 'idCompany'});

// Relationship for the user who registers the entry
models.EntryExit.belongsTo(models.User, { foreignKey: 'idEntryUser', as: 'entryUser' });
// A user may have registered many entries
models.User.hasMany(models.EntryExit, { foreignKey: 'idEntryUser', as: 'entries' });

// Relationship for the user who checks out
models.EntryExit.belongsTo(models.User, { foreignKey: 'idExitUser', as: 'exitUser' });
// A user may have logged many outputs
models.User.hasMany(models.EntryExit, { foreignKey: 'idExitUser', as: 'exits' });


export default models;
