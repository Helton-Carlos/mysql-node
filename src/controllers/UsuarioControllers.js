const { json } = require("express/lib/response");
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
    },
    buscarUmUsuario: async(req,res)=>{
        let getJson  = {error:'',result:{} }
        let codigo = req.params.codigo
        let usuario  = await UsuarioServices.buscarUmUsuario(codigo);
        if(usuario){
            getJson.result=usuario
        }
        res.json(getJson)
    },
    
    inserirUsuario: async(req, res) => {
        let json = {error:'', result:{}};

        let email = req.body.email;
        let senha = req.body.senha;

        if (email && senha){
            let usuario = await UsuarioServices.inserirUsuario(email, senha);
            json.result = {
                codigo: usuario,
                email,
                senha
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
}