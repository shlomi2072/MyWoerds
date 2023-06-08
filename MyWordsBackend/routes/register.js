import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import userSchema from '../models/UserModel.js';

router.post('/', async function (req, res) {
  console.log(req.body);
  console.log("bhgujyhf");
  // let newUser = {
  //   name: req.body.name,
  //   password: req.body.password,
  //   email: req.body.email,
  //   number: req.body.number,
  //   card: [{
  //     "word": "car",
  //     "translate": "רכב"
  //   },
  //   {
  //     "word": "love",
  //     "translate": "אהבה"
  //   },
  //   {
  //     "word": "date",
  //     "translate": "תאריך"
  //   },
  //   {
  //     "word": "take",
  //     "translate": "לקחת"
  //   },
  //   {
  //     "word": "sorry",
  //     "translate": "להצטער"
  //   },
  //   {
  //     "word": "sale",
  //     "translate": "למכור"
  //   }],
  //   numberOfCard: 0,
  //   numberReturnEveryDay: 10,
  //   numberAddEveryDay: 5
  // }
  // let queryNumber = await userSchema.find({ number: newUser.number })
  // let queryPassword = await userSchema.find({ password: newUser.password })
  // let queryEmail = await userSchema.find({ email: newUser.email })

  // if (queryNumber[0]!=undefined || queryPassword[0] !=undefined || queryEmail[0] != undefined) {
  //   res.status(200);
  //   res.send({
  //     ok: false
  //   })
  // }
  // else {
  //   let model = new userSchema(newUser);
  //   model.save()
  //   const token = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });
  //   res.status(200);
  //   res.send({
  //     ok: true,
  //     token: token
  //   })
  }
)
export default router;