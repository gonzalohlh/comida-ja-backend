const mongoose = require("mongoose");

const namesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Agregar un nombre"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Names = mongoose.model("Names", namesSchema);

module.exports = Names;
