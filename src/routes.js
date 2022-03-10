const express = require("express")
const router = express.Router() 

const UsuarioControllers = require("./controllers/UsuarioControllers")

router.get("/cadastro", UsuarioControllers.buscarUsuario);
router.get("/cadastro/:codigo", UsuarioControllers.buscarUmUsuario);
router.post("/cadastrar", UsuarioControllers.inserirUsuario)
module.exports = router;