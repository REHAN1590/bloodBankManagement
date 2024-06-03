const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan')
const cors = require('cors');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
//const path = require("path")
//dot config
dotenv.config();

//mongoDb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//routes
//1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth",require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
// //STATIC FOLDER
// app.use(express.static(path.join(__dirname,'./client/build')));
// //STATIC ROUTE
// app.get("*",function (req,res) 
// {res.sendFile(path.resolve(__dirname,'./client/build/index.html'))});

//port
const PORT =process.env.PORT||8080;

//LISTEN
app.listen(PORT,() => {
    console.log(  `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
    .bgBlue.white);
});