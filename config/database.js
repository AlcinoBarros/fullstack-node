const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = function(uri) {
  mongoose.connect(uri, { useNewUrlParser: true });
  mongoose.set("debug", true);
  mongoose.connection.on("connected", function() {
    console.log("Conectado ao MongoDB em ", uri);
  });

  mongoose.connection.on("error", function(error) {
    console.log("Erro na conexão:", console.error);
  });

  mongoose.connection.on("disconnected", function() {
    console.log("Desconectado do MngoDB");
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log("Aplicacao terminada, conxão fechada");
      process.exit(0);
    });
  });
};
