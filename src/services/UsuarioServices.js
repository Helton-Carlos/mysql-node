const db =require("../db")

module.exports={
    buscarUsuario:()=>{
        return new Promise((aceito,rejeito)=>{
           db.query('SELECT * FROM cadastro',(error,results)=>{
            if(error){rejeito(error);return}
            aceito(results)
           })
        })
    }
}