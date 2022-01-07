const express = require("express");
const app = express();
const errorMiddleWear = require("./middlewear/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotEnv = require("dotenv");

// Config
dotEnv.config({ path: "./backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//Routes product Import
const product = require("./routes/productRoute");
//Routes User Import
const user = require("./routes/userRoute");
//Routes Order Import
const order = require("./routes/orderRoute");
//Routes payment import
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Error MiddleWear
app.use(errorMiddleWear);

module.exports = app;
