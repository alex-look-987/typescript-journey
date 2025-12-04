import express from 'express';
import userRoutes from './routes/userRoutes';
import { Application, Request, Response } from 'express';

const app: Application = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('API is up and running!');
});

app.listen(PORT, () => {
    console.log('Server is listeing on port:', PORT) 
});



