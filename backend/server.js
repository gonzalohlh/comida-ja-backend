const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
/* const connectDB = require("./config/connectDB"); para el otro metodo */
const nameRoutes = require("./routes/nameRoute");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({ origin: ["http://localhost:3000/", "https://comida-ja.onrender.com"] })
);
app.use("/api/names", nameRoutes);

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//otro metodo
/* const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer(); */
