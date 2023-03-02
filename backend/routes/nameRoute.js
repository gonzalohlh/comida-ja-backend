const express = require("express");
const {
  createName,
  getNames,
  getName,
  deleteName,
  updateName,
} = require("../controllers/nameController");
const Names = require("../models/nameModel");
const router = express.Router();

//Otra forma de declarar las rutas con el mismo path
/* router.route("/").get(getNames).post(createName);
router.route("/:id").get(getName).delete(deleteName).put(updateName); */

//Crear un nombre
router.post("/", createName);

//Traer los nombres
router.get("/", getNames);

//Traer un nombre
router.get("/:id", getName);

//Borrar un nombre
router.delete("/:id", deleteName);

//Editar un nombre
router.put("/:id", updateName);

module.exports = router;
