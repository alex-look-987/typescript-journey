import cors from "cors";
import helmet from "helmet";
import express from 'express';
import userRoutes from './routes/userRoutes';
import { logger } from './middleware/logger';
import { Application, Request, Response } from 'express';

const app: Application = express()

// Middlewares
app.use(logger)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(helmet())

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