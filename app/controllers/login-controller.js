const usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

class LofinController {
  async fazerLogin(req, res) {
    const login = req.body.usuario;
    const password = req.body.senha;

    const conta = await usuario.findOne({ login });
    if (conta) {
      const isValid = bcrypt.compareSync(password, conta.senha);
      if (isValid) {
        return res.json("Login efetuado com sucesso");
      } else {
        return res.json("Senha incorreta!");
      }
    } else {
      return res.json("Usuario não encontrado");
    }
  }
}

module.exports = new LofinController();
