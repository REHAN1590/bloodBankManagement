const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require("path"); // ✅ REQUIRED for frontend

// dotenv config
dotenv.config();

// mongoDB connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


// ✅ STATIC FOLDER (SERVE REACT FRONTEND)
app.use(express.static(path.join(__dirname,'./client/build')));

// ✅ STATIC ROUTE (LOAD REACT APP)
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname,'./client/build/index.html'));
});


// port
const PORT = process.env.PORT || 8080;

// LISTEN
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE || "development"} Mode On Port ${PORT}`
      .bgBlue.white
  );
});