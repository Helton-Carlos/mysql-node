const db = require("../db");

module.exports = {
  buscarUsuario: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("select * from cadastro", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
};
