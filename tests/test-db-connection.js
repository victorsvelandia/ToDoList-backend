import 'dotenv/config';
import sequelize from '../src/config/sequelize.js';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database successful');
    } catch (error) {
        console.error('Connection error', error);
    } finally {
        await sequelize.close();
    }
})();