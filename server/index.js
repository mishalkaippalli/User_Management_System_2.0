import express from 'express';
import cors from 'cors'
const app = express();
import connectToMongo from './config/db.js';
import userRoutes from './routes/user.js'

const PORT = process.env.PORT || 9000;

connectToMongo();

app.use(cors());

app.use(express.static("public"))

app.use(express.json());

//Routes

app.use("/api/v1", userRoutes)

app.listen(PORT,() => console.log(`app running on ${PORT}`))