const { Router } = require("express");
const router = Router();

const user = require("../models/users");
router.get("/", (req,res) => res.send("hola mundo"));

router.post("/registro", (req, res) => {
    const {usu_usuario, usu_password} = req.body;
    console.log(usu_usuario, usu_password);
    const newUser = new.user({usu_usuario, usu_password});
    newUser.save();
    res.send("registro");
});

module.exports = router;