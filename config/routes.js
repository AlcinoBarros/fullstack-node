const express = require("express");
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const ItemController = require("../app/controllers/item-controller");
const OrdemServicoController = require("../app/controllers/ordemServico-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");

routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
routes.post("/clientes", ClienteController.store);
routes.put("/clientes/:id", ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);

routes.get("/itens", ItemController.findAll);
routes.get("/itens/:id", ItemController.findById);
routes.post("/itens", ItemController.store);
routes.put("/itens/:id", ItemController.update);
routes.delete("/itens/:id", ItemController.delete);

routes.get("/ordemservicos", OrdemServicoController.findAll);
routes.get("/ordemservicos/:id", OrdemServicoController.findById);
routes.post("/ordemservicos", OrdemServicoController.store);
routes.put("/ordemservicos/:id", OrdemServicoController.update);
routes.delete("/ordemservicos/:id", OrdemServicoController.delete);

routes.get("/usuarios", UsuarioController.findAll);
routes.post("/usuarios", UsuarioController.store);
routes.post("/usuarios/validar", UsuarioController.usuarioValido);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

routes.post("/login", LoginController.fazerLogin);

module.exports = routes;
