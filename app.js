import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js"
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import errroMiddelware from "./middelwares/errorMiddleware.js";
import 'express-async-errors'
// Config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(cors());

// Define routes
app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authRoutes)

//validation middelware
app.use(errroMiddelware)

// const PORT = process.env.PORT || 8080;
app.listen(8000, () => {
    console.log(`Server is listening on port 8000`);
});
