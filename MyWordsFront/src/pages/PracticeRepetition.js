import React, { useEffect, useState } from 'react'
import { json , useNavigate, useSubmit } from 'react-router-dom';
import axios from 'axios';
import ButtonSoundWords from '../components/ButtonSoundWords';



// function PracticeRepetition() {
//     const [userData , setUserData] = useState({});
//     const [locationInTheArray, setLocationInTheArray] = useState(0);   
//     const [word, setWord] = useState("");
//     const [translate, setTranslate] = useState("");
//     const [message, setMessage] = useState("");
//     const [complete, setComplete] = useState(false);
//     const [rest, setRest] = useState(0)
//     let navigate = useNavigate();
//     function isEmpty(obj) {
//         return Object.keys(obj).length === 0;
//     }
//     useEffect(()=>{
//         let tokenFromLocalStorge = localStorage.userToken
//         if(tokenFromLocalStorge==null) {      
//             navigate("../")
//         }
//         else {  
//             axios.post('http://localhost:3001/home/checkToken',{token: tokenFromLocalStorge})
//                 .then(function (response) {  
//                     if(response.data=="no") {
//                         navigate("../")
//                     }
//                     else{
//                         axios.post('http://localhost:3001/home/getUser',{name: response.data.name})
//                             .then(function(response){
//                                 console.log(response);
//                                 setUserData(response);                              
//                                 setRest(response.data[0].numberReturnEveryDay);
//                                 setLocationInTheArray(response.data[0].numberOfCard);                          
//                             })
//                             .catch(function(err){
//                                 alert("Something went wrong with the appeal of your words. Sorry");
//                                 console.log(err);
//                             })
//                     } 
//                 })
//                 .catch(function(error) {
//                     console.log(error);
//                 });
//         }     
//     },[])             
//     useEffect(()=>{      
//         if(isEmpty(userData)==false){
//             setWord(userData.data[0].card[locationInTheArray].word)
//         }      
//     },[locationInTheArray,userData])



//     useEffect(()=>{
//         if(isEmpty(userData)==false){
//             if(rest==0){
//                 let values = {
//                     name: userData.data[0].name,
//                     location: locationInTheArray
//                 }
//                 axios.post("http://localhost:3001/cards/updateLocation", values)
//                     .then(function (response) {
//                         console.log(response)
//                     })
//                     .catch(function (err) {
//                         console.log(err)
//                     })
//                 setComplete(true)
//             }
//         }
//     },[rest])
   
//     function submitTranslate() {
//         if(translate == userData.data[0].card[locationInTheArray].translate) {
//             setMessage("Well done! Amazing!");
//             setTimeout(() => {
//                 if (locationInTheArray == (userData.data[0].card.length)-1) {
//                     setLocationInTheArray(0)
//                 }
//                 else {
//                     setLocationInTheArray(a => a + 1)
//                 }
//                 setMessage("");
//                 setRest(a => a - 1);
//                 setTranslate("");
//             }, 2000);
//         }
//         else if (translate != userData.data[0].card[locationInTheArray].translate) {
//             setMessage("Mistake...try again");
//         }
//     }
//     return (
//         <div>
//             {!complete&&
//             <div>
//             {isEmpty(userData)==false&&
//                 <>
//                     <h1>Type the translation for the word</h1>
//                     <h1>You have {rest} words left</h1>
//                     <h1 style={{ display: "inline" }}>word : {word}</h1>  <ButtonSoundWords word={word}></ButtonSoundWords>
//                         <form onSubmit={(e) => {e.preventDefault(); submitTranslate()}}>
//                             <input required type="text" placeholder="type translate" value={translate} onChange={e => setTranslate(e.target.value)} /><br></br>
//                             <input type='Submit' />
//                         </form>
//                     <h1>{message}</h1>  
//                 </>
//             }
//             </div>
//             }
//             {complete&&
//                 <div style={{ backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/101/380/61/cat-animals-bokeh-cute-wallpaper-preview.jpg")` }} >
//                     <h1 style={{ fontSize: "80px", textAlign: "center", color: "green" }}>We finished part one!</h1>
//                     <h1 style={{ fontSize: "50px", textAlign: "center", color: "green" }}>In a few seconds we will move to our second part</h1>
//                     {setTimeout(() => {
//                         navigate("additionPractice")
//                 }, 3000)}
//                 </div>
//             }
//         </div>
//     )
// }
// export default PracticeRepetition;