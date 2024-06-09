import express from 'express'
import cors from 'cors'
import connectToDB from './config/connectDb.js'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'
import routeHandler from './middleware/routeHandler.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config();



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/health',(req,res) => {
    res.status(200).json({msg: "Server is running"});
});
app.use('/users',userRoutes);
app.all('*',routeHandler);
app.use(errorHandler);

connectToDB(app);