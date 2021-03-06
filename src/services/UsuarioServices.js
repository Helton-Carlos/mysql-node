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
  buscarUmUsuario: (codigo) => {
    return new Promise((aceito, rejeito) => {
      db.query(
        "select * from cadastro where codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeito(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },
  inserirUsuario: (email, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO cadastro (email, senha) VALUES (?, ?)",
        [email, senha],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo);
        }
      );
    });
  },
  modificarUsuario: (codigo, email, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE cadastro SET email = ?, senha = ? WHERE codigo = ?",
        [email, email, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
  excluirUsuario:(codigo) =>{
    return new Promise((aceito,rejeito)=>{
      db.query('DELETE FROM cadastro WHERE codigo = ?',[codigo],(error,results)=>{
        if(error){
          rejeito(error)
          return 
        }aceito(results)
      })
    })
  }
};
