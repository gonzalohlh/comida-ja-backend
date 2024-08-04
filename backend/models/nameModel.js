const mongoose = require("mongoose");

const namesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Agregar un nombre"],
    },
    /* amount: {
      type: Number,
      required: [true, "Agregar una cantidad"],
    }, */
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

/*opcion mejora:
{
    name: {
      type: String,
      required: [true, "Agregar un nombre"],
    },
    payment: {
      type: Number,
      required: [true, "Agregar un monto"],
    },
    amount: {
      type: Number,
      required: [true, "Agregar una cantidad"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  }
*/
