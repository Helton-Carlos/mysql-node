const express = require("express")
const router = express.Router() 

const UsuarioControllers = require("./controllers/UsuarioControllers")

router.get("/cadastros", UsuarioControllers.buscarUsuario);
router.get("/cadastrar/:codigo", UsuarioControllers.buscarUmUsuario);
router.post("/cadastrar", UsuarioControllers.inserirUsuario)
router.put("/cadastrar/:codigo", UsuarioControllers.modificarUsuario)
router.delete("/cadastrar/:codigo", UsuarioControllers.excluirUsuario)
module.exports = router;