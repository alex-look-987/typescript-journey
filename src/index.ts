import app from './app';
import dotenv from 'dotenv';


// Env variables
dotenv.config()

// PORT
const PORT: string | number = process.env.PORT || 3000;
const URL: string = `http://localhost:${PORT}`


// Initialize Server
app.listen(PORT, () => {
    console.log('Server is listeing on port:', PORT)
    console.log(`API URL: ${URL}`)
    console.log(`For Docs visit ${URL}/api-docs`)
});
