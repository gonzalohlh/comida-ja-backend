const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
/* const connectDB = require("./config/connectDB"); para el otro metodo */
const nameRoutes = require("./routes/nameRoute");
const cors = require("cors");

const app = express();

//Middleware
//Ejemplo:
/* const logger = (req, res, next) => {
    console.log("Middleware ran");
    console.log(req.method);
    next();
}; */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({ origin: ["http://localhost:3000/", "https://comida-ja.onrender.com"] })
);
app.use("/api/names", nameRoutes);

/* //Para ver si funciona en el navegador:
app.get("/", (req, res) => {
  res.send("Home page");
}); */

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
