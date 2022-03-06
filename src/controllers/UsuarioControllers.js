const UsuarioServices = require("../services/UsuarioServices")

module.exports = {
    buscarUsuario: async(req,res)=>{
        let json  = {error:'',result:[] }
        let cadastro  = await UsuarioServices.buscarUsuario();
        for(let i in cadastro){
            json.result.push({
                codigo:cadastro[i].codigo,
                email:cadastro[i].email ,
                senha:cadastro[i].senha,
            })
        }
        res.json(json)
    } 
}