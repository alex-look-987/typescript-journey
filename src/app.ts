import express from 'express';
import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/userRoutes';
import { logger } from './middleware/logger';
import { Application, Request, Response } from 'express';

const app: Application = express()

// Middlewares
app.use(logger);
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Main Endpoint
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "API is up and running!",
        menu: {
            users: '/users',
            docs: '/docs',
            data: '/users/data'
        }
    })
});

export default app;