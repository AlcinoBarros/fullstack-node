const ordemServico = require("../models/ordemServico");

class OrdemServicoController {
  async findAll(req, res) {
    const registros = await ordemServico.find();
    return res.status(200).json(registros);
  }

  async findById(req, res) {
    const registro = await ordemServico.findById(req.params.id);
    if (registro) {
      return res.status(200).json(registro);
    } else {
      return res.status(404).send("Not Found");
    }
  }

  async findByCliente(req, res) {
    var regex = new RegExp("" + req.query.pesquisa + ".*$", "i");
    const registros = await os.find({ "cliente.nome": regex });
    return res.json(registros);
  }

  async store(req, res) {
    const registro = await ordemServico.create(req.body);
    return res.status(201).json(registro);
  }

  async update(req, res) {
    const registro = await ordemServico.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    if (registro) {
      return res.status(200).send(registro);
    } else {
      return res.status(404).send("Not found");
    }
  }

  async delete(req, res) {
    const registro = await ordemServico.findByIdAndDelete(req.params.id);
    if (registro) {
      return res.status(200).send("Deleted");
    } else {
      return res.status(404).send("Not found");
    }
  }
}

module.exports = new OrdemServicoController();
