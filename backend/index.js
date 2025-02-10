import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';


const app = express();

//middleware: body-parser": sending data to the server and cors receiving data from the server
app.use(bodyParser.json());
app.use(cors());

const port = 8000




//Routes
app.use('/api', studentRoutes);

//Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

