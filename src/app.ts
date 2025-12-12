import express from 'express';
import userRoutes from './routes/userRoutes';
import { logger } from './middleware/logger';
import { Application, Request, Response } from 'express';

const app: Application = express()

// Middlewares
app.use(logger);
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Main Endpoint
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "API is up and running!",
        menu: {
            users: '/users',
            docs: '/api-docs'
        }
    })
});

export default app;