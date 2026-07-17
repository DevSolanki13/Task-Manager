const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/404");
const errorHandlerMiddleware = require("./middleware/error-handler");

//MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());

//ROUTES
app.use('/api/v1/tasks',tasks);

// 404 handler
app.use(notFound);
//error handler
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
