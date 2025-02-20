const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const bookRoutes=require("./routes/bookRoutes")
//to execute express
const app=express()
const cors = require('cors');
app.use(cors()); 
app.use(express.json()); 

//routes
app.use("/api/books",bookRoutes)


const port=process.env.PORT ||4000
app.listen(port,()=>console.log("Server is running on",port))

//DB connection
const connectionString=process.env.MONGO_URI
mongoose.connect(connectionString)
        .then(()=>console.log("Connected to the database"))
        .catch((err)=>console.error("error:",err))