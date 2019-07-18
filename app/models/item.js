const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = newSchema(
  {
    descricao: String,
    valor: Number
  },
  { timestamps: true }
);

const item = mongoose.model("itens", itemSchema);

module.exports = item;
