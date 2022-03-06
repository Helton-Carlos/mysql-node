const db =require("../db")

module.exports={
    buscarUsuario:()=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM cadastro', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
   
}