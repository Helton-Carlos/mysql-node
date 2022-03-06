const UsuarioServices = require("../services/UsuarioServices")

module.exports = {
    buscarUsuario: async(req,res)=>{
        let getJson  = {error:'',result:[] }
        let cadastrar  = await UsuarioServices.buscarUsuario();
        for(let i in cadastrar){
            getJson.result.push({
                codigo:cadastrar[i].codigo,
                email:cadastrar[i].email,
                senha:cadastrar[i].senha,
            })
        }
        res.json(getJson)
    } 
}