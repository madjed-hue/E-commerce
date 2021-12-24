const app = require("./app");
const dotEnv = require("dotenv");
const connectDatabase = require("../backend/config/database");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shuting down the surver due to uncaught exception");
  process.exit(1);
});

// Config
dotEnv.config({ path: "./backend/config/config.env" });

// Connect to Database
connectDatabase();

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
