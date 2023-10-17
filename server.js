const express=require('express');
const connectDB = require('./Databse/dbconnect');
const dotenv=require('dotenv')
const Router=require('./routes/Routes')
const cors=require('cors')
const app = express();


connectDB();
dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/",Router)


const port=process.env.port || 6000
app.listen(port,()=>console.log(`server is running ${port}`));