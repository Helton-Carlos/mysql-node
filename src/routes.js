const express = require("express")
const router = express.Router() 

const UsuarioControllers = require("./controllers/UsuarioControllers")

router.get("/cadastro", UsuarioControllers.buscarUsuario)
module.exports = router;