import app from './app';
import * as dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

// Env variables
dotenv.config()

// PORT
if (!process.env.PORT) {
    console.log("No port value specified")
}

const PORT = parseInt(process.env.PORT as string, 10)
const URL: string = `http://localhost:${PORT}`

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Initialize Server


app.listen(PORT, () => {
    console.log('Server is listeing on port:', PORT)
    console.log(`API URL: ${URL}`)
    console.log(`For Docs visit ${URL}/api-docs`)
});
