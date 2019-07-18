const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordemServicoSchema = newSchema(
  {
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
    },
    itens: [
      {
        type: Schema.Types.ObjectId,
        ref: "item"
      }
    ]
  },
  { timestamps: true }
);

const ordemServico = mongoose.model("ordemServicos", ordemServicoSchema);

module.exports = ordemServico;
