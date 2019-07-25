const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordemServicoSchema = new Schema(
  {
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    cliente: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "cliente"
      },
      nome: String
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
