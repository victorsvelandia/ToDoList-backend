import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import routes from './src/routes/index.js';

const swaggerDocument = JSON.parse(fs.readFileSync('./docs/swagger.json', 'utf8'));

const app = express();

// Swagger documentation path

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', routes);

export default app;