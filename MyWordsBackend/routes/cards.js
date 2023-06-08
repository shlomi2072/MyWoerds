let express = require('express');
let router = express.Router();
let UserModel = require("../models/UserModel")




router.post("/updateLocation",async(req,res)=>{
    console.log(req)
    let user = await UserModel.findOne({name:req.body.name})
    user = await UserModel.updateOne({name:req.body.name},{numberOfCard: req.body.location})
    res.status(200);
    res.send("The num update")
})






router.post("/createACard",async function(req,res){
    let user = await UserModel.findOne({name:req.body.name})
    let card = user.card;
    let cardIsExists = card.find((item)=>{
        return item.word==req.body.word&&item.translate==req.body.translate
    })
    console.log(cardIsExists);
    if(cardIsExists!=undefined) {
        res.send("The card exists")
    }
    else {
        let wordAndTranslate = {
            word : req.body.word,
            translate: req.body.translate
        }
        card.push(wordAndTranslate);
        user = await UserModel.updateOne({name:req.body.name},{card: card})
        res.send("The card add!")
    }
})

// router.post("/updateCard",async(req,res)=>{

//     let values = {
//         questionOld: req.body.questionOld,
//         answerOld : req.body.answerOld,
//         questionNew: req.body.questionNew,
//         answerNew : req.body.answerNew
//     }
//     let user = await UserModel.findOne({name:req.body.name})
//     let arrCards =  user.card
//     let card = arrCards.find((item)=>{
//         // console.log("item = ",item);
//         console.log( item.question);
//         console.log( values.answerOld);
//         return item.question == values.questionOld
//     })
//     if (card) {
//         card.question = values.questionNew;
//         card.answer = values.answerNew;
//         user = await UserModel.updateOne({name:req.body.name},{card: arrCards})   
//         return res.send("card Updated").status(200)
//     }
// })

module.exports = router