const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());

//ROUTES
app.use('/api/v1/tasks',tasks);

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

