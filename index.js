require("dotenv").config();
const http = require("http");
const database = require("./config/database");
const app = require("./config/server");

database(process.env.MONGO_URI);

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, function() {
  console.log("Servidor iniciado na porta 3000");
});


//NODE_ENV = development
//MONGO_URI = mongodb+srv://alcino94:945494@cluster0-qsgfg.mongodb.net/fullstack-node?retryWrites=true

/*
baixar os aplicativos 
insomniac
nodejs
vscode
cmder
robo 3t
git

baixar as seguintes bibliotecas
mongoose
nodemon
body-parser
bcrypt-nodejs
cors
dotenv
routes

*/