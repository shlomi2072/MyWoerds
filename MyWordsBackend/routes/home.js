let express = require('express');
let router = express.Router();
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
let UserModel= require('../models/UserModel');
require('dotenv').config()
  

router.post('/checkToken',async function(req,res){
   let token = req.body.token;
   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(user) {
        res.send(user)
    } 
    if(err) {
        res.send("no")
    }
 })
})


    router.post('/getUser',async function(req,res){
        let user = await UserModel.find({name:req.body.name})
        res.send(user)
    })


    router.post('/setNumberReturnEveryDay',async function(req,res){
        let user = await UserModel.find({name:req.body.name})
        user = await UserModel.updateOne({name:req.body.name},{numberReturnEveryDay: req.body.num})
        res.status(200);
        res.send("The num update")
    })

    router.post('/setNumberAddEveryDay',async function(req,res){
        let user = await UserModel.find({name:req.body.name})
        user = await UserModel.updateOne({name:req.body.name},{numberAddEveryDay: req.body.num})
        res.status(200);
        res.send("The num update")
    })




module.exports = router;










