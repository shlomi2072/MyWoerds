let express = require('express');
let router = express.Router();
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
let userSchema = require('../models/UserModel');
require('dotenv').config()


router.post('/',async function(req,res){
    let user = {
        name : req.body.name,
        password: req.body.password
    }  
    let checkName = await userSchema.find({name:user.name})
    if(checkName[0]!=undefined&&checkName[0].password==req.body.password) {
        const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: "60m"});
        res.status(200);
        res.send({
          ok: "yes",
          token: token
        })
       
    }
    else{
        res.status(200);
        res.send({
            ok: "no"
        })
    }       
})
module.exports = router;