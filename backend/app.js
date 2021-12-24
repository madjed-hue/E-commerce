const express = require("express");
const app = express();
const errorMiddleWear = require("./middlewear/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
//Routes product Import
const product = require("./routes/productRoute");
//Routes User Import
const user = require("./routes/userRoute");
//Routes Order Import
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Error MiddleWear
app.use(errorMiddleWear);

module.exports = app;
