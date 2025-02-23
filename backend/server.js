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
const connectionString=process.env.MONGO_URI||"mongodb+srv://Admin:jzBQZUGg5TT6bwsc@cluster0.h4dtf.mongodb.net/"
mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      })
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB Connection Error:", err));