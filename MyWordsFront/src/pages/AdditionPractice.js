import React, {useEffect, useRef, useState} from 'react'
import { json, useSubmit ,useNavigate} from 'react-router-dom';
import axios from 'axios';




// function AdditionPractice(){
//     const [userData , setUserData] = useState({});
//     const [inputWord , setInputWord] = useState("");
//     const [inputTranslate , setInputTranslate] = useState("");
//     const [word,setWord] = useState("");
//     const [translate,setTranslate] = useState("");
//     const [Message,setMessage] = useState("");
//     const [rest,setRest] = useState(0);
//     const [isComplete, setIsComplete] = useState(false);
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
//                                 setRest(response.data[0].numberAddEveryDay)                                                      
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
//     // useEffect(() => {
//     //     if(rest==0){
//     //         setIsComplete(true);
//     //     }
//     //   }, [rest]);
//     //   useEffect(() => {
//     //      setInput2(resultFromAPI)
//     //   }, [resultFromAPI]);

//     // function setIsSelfTranslationFunc(){
//     //     setIsSelfTranslation(true);
//     //     setWordAndTranslateIsFull(true);
//     // }
//     // function getTranslate(){
//     //         let English = /^[a-z]+$/i;
//     //         let Hebrew = /^[א-ת]+$/i;
//     //         let isHebrew = Hebrew.test(input1);
//     //         let isEnglish = English.test(input1);
//     //         let source;
//     //         let target;
//     //         if(isEnglish){
//     //             source = "en"
//     //             target = "he"
//     //             setMessageMixError("")
//     //         }
//     //         else if(isHebrew){
//     //             source = "he"
//     //             target = "en"
//     //             setMessageMixError("")
//     //         }
//     //         else{
//     //             setResultFromAPI("")
//     //             setMessageMixError("Everything in English or Hebrew");
//     //             return;
//     //         }
//     //     const options = {
//     //         method: 'POST',
//     //         url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
//     //         headers: {
//     //             'content-type': 'application/json',
//     //             'X-RapidAPI-Key': 'af7bb4307cmshc7caea7245f993cp126679jsn33b89335ba74',
//     //             'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
//     //         },       
//     //         data: {"q": input1,"source":source,"target":target}
//     //     };                 
//     //         axios.request(options)
//     //         .then(function (response) {
//     //              //   console.log(response.data.data.translations.translatedText);
//     //             setWordAndTranslateIsFull(true);
//     //             setResultFromAPI(response.data.data.translations.translatedText);
//     //             setInput2(response.data.data.translations.translatedText);
                        
//     //         })
//     //         .catch(function (error) {
//     //             setResultFromAPI("There is a problem with this option. Try to translate yourself")
//     //             console.error(error);
//     //         });
//     // }
//     // function addCard(){
//     //     let regular = /^[a-zA-Z]+$|^[א-ת]+$/
//     //     let regularen = /^[a-zA-Z]+$/
//     //     let regularHe = /^[א-ת]+$/
//     //     if(input1==""||input2==""){
//     //         alert("Fill in a word and translate correctly1")
//     //         setInput1("");
//     //         setInput2("");
//     //         return;
//     //     }
//     //     else if((!regular.test(input1)||!regular.test(input2)&&resultFromAPI=="")){
//     //         alert("Fill in a word and translate correctly1")
//     //         return;
//     //     }
//     //     else if((regularen.test(input1)&&regularen.test(input2))||(regularHe.test(input1)&&regularHe.test(input2))){
//     //         alert("Fill in a word and translate correctly2");
//     //         return;    
//     //     }
//     //     else{          
//             // if(regularen.test(input1)){
//             //     console.log("vte");
//             //     setTranslate(input1);
//             //     setWord(input2);
//             // }
//             // else{
//             //     setTranslate(input2);
//             //     setWord(input1);
//             // }
            
//     //         console.log(input1);
//     //         console.log(input2);
//     //         console.log(word);
//     //         console.log(translate);
//     //         let card = {
//     //             name: props.value.data[0].name,
//     //             word: word,
//     //             translate: translate
//     //         }
//     //         axios.post("http://localhost:3001/cards/createACard",card)
//     //             .then(function (response) { 
//     //                         console.log(response);
//     //                 if(response.data=="The card add!") {
//     //                     setMessageIsAdd("You have added the word to the vocabulary");
//     //                     setTimeout(() => {
//     //                         setMessageIsAdd("")
//     //                     }, 5000);
//     //                     setInput1("");
//     //                     setInput2("");
//     //                     setResultFromAPI("");
//     //                     setRest(rest-1);
//     //                     setIsSelfTranslation(false);
//     //                 } 
//     //                 else{
//     //                     setMessageIsAdd("The word was not added maybe because it already exists maybe just a problem");
//     //                     setTimeout(() => {
//     //                         setInput1("");
//     //                         setInput2("");
//     //                         setResultFromAPI("");
//     //                         setMessageIsAdd("")
//     //                     }, 5000);
//     //                 }          
//     //             })
//     //             .catch(function(err){
//     //                 console.log(err)
//     //             })
//     //     }
//     // }
//     // function getRandomWord(){
//     //     const options = {
//     //         method: 'GET',
//     //         url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
//     //         params: {count: '1'},
//     //         headers: {
//     //           'X-RapidAPI-Key': 'af7bb4307cmshc7caea7245f993cp126679jsn33b89335ba74',
//     //           'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
//     //         }
//     //     };        
//     //     axios.request(options)
//     //         .then(function (response) {
//     //             // console.log(response.data[0]);
//     //             setInput1(response.data[0])
//     //         })
//     //         .catch(function (error) {
//     //           console.error(error);

//     //         });
//     // }
//     return(
//         <div>
//             {!isComplete&&
//                 <div>
//                     {isEmpty(userData)==false&&
//                         <>
//                                 <h1>You have {rest} words left</h1>
//                                 <h1>Fill in the line with a word or phrase, in English or Hebrew</h1>
//                              {/* <button onClick={getRandomWord}>I have no idea for a word</button>
//                            <input required type="text" placeholder="type word" value={input1}
//                              onChange={e => setInput1(e.target.value)} />
//                             <button onClick={getTranslate}>translating</button> 
//                             {
//                                  isSelfTranslation&&
//                                    <>
//                                    <input required type="text" placeholder="type word" value={input2}
//                                          onChange={function(e){ setInput2(e.target.value)
//                                              setResultFromAPI("")}} />
//                                 </>
//                             }
//                             <h1>{resultFromAPI}</h1>
//                                  <h1>{messageMixError}</h1>
//                                  {
//                                     wordAndTranslateIsFull&&
//                                      <button onClick={addCard}>I would like to add this word</button>
//                             } */}
//                               <h1>{Message}</h1>
//                         </>
//                     }
//                 </div>
//             }
//             {isComplete&&
//                 <div>
//                     <img src='https://d6ce0no7ktiq.cloudfront.net/images/preview/2020/04/14/design-63781/template-sticker-600x600.png' />
//                 </div>
//             }
//         </div>
//     )
// }


// export default AdditionPractice;