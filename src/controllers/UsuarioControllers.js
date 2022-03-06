const UsuarioServices = require("../services/UsuarioServices")

module.exports = {
    buscarUsuario: async(req,res)=>{
        let json  = {error:'',result:[] }
        let usuario  = await UsuarioServices.buscarUsuario();
        for(let i in usuario){
            json.result.push({
                codigo:usuario[i].codigo,
                email:usuario[i].email ,
                senha:usuario[i].senha,
            })
        }
        res.json(json)
    } 
}