import app from './app';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

// Env variables
dotenv.config()

// PORT
const PORT: string | number = process.env.PORT || 3000;
const URL: string = `http://localhost:${PORT}`

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Initialize Server
app.listen(PORT, () => {
    console.log('Server is listeing on port:', PORT)
    console.log(`API URL: ${URL}`)
    console.log(`For Docs visit ${URL}/api-docs`)
});
