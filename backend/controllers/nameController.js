const Names = require("../models/nameModel");

//Crear un nombre
const createName = async (req, res) => {
  try {
    const name = await Names.create(req.body);
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Traer los nombres
const getNames = async (req, res) => {
  try {
    const names = await Names.find();
    res.status(200).json(names);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Traer un nombre
const getName = async (req, res) => {
  try {
    const { id } = req.params;
    const name = await Names.findById(id);
    if (!name) {
      return res.status(404).json(`No existe nombre con esta id: ${id}`);
    }
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Borrar un nombre
const deleteName = async (req, res) => {
  try {
    const { id } = req.params;
    const name = await Names.findByIdAndDelete(id);
    if (!name) {
      return res.status(404).json(`No existe nombre con esta id: ${id}`);
    }
    res.status(200).send("Se elimino este nombre");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Editar un nombre
const updateName = async (req, res) => {
  try {
    const { id } = req.params;
    const name = await Names.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!name) {
      return res.status(404).json(`No existe nombre con esta id: ${id}`);
    }
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createName,
  getNames,
  getName,
  deleteName,
  updateName,
};
