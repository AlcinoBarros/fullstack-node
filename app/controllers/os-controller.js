const os = require("../models/os");

class OSController {
  async findAll(req, res) {
    const registros = await os.find();
    return res.status(200).json(registros);
  }

  async findById(req, res) {
    const registro = await os.findById(req.params.id);
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
    const registro = await os.create(req.body);
    return res.status(201).json(registro);
  }

  async update(req, res) {
    const registro = await os.findByIdAndUpdate(
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
    const registro = await os.findByIdAndDelete(req.params.id);
    if (registro) {
      return res.status(200).send("Deleted");
    } else {
      return res.status(404).send("Not found");
    }
  }
}

module.exports = new OSController();
