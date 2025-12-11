import open from 'open';
import express from 'express';
import userRoutes from './routes/userRoutes';
import { logger } from './middleware/logger';
import { Application, Request, Response } from 'express';

const app: Application = express()
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(logger);
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Main Endpoint
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "API is up and running!",
        menu: {
            users: '/api/users'
        }
    })
});

export default app;