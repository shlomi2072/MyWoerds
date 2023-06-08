import express from 'express';
import cors from 'cors';
let app = express();
// import login from './routes/login.js';
import register from './routes/register.js';
// import home from './routes/home'; 
// import headerChecker from './headerChecker';
// import routeCards from "./routes/cards";
import './database/mongo.js';
// app.use(json())
app.use(cors())
// app.use(headerChecker);
app.use('/register',register);
// app.use('/login',login)
// app.use('/cards',routeCards)
// app.use('/home',home)
app.use(function(err,req,res,next){
  console.error(err.stack)
  res.status(500).send("Somethink is broken");
})


app.get('*',function(rep,res){
  res.send('404 page',404);
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});