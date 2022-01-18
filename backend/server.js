const app = require("./app");
const dotEnv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("../backend/config/database");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shuting down the surver due to uncaught exception");
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotEnv.config({ path: "./backend/config/config.env" });
}
// dotEnv.config({ path: "./backend/config/config.env" });

// Connect to Database
connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port : ${process.env.PORT}`);
});

// Unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shuting down the surver due to unhadle promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
