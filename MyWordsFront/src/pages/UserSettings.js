import React, {useEffect, useState} from 'react'
import { json, useSubmit } from 'react-router-dom';
import axios from 'axios';




// function UserSettings (props) {
//   console.log(props);
//   const [numberOfWordsToReturn,setNumberOfWordsToReturn] = useState(props.user.data[0].numberReturnEveryDay)
//   const [numberOfWordsToAdd,setNumberOfWordsToAdd] = useState(props.user.data[0].numberAddEveryDay);
//   const [messageToUser,setMessageToUser] = useState("")
//   useEffect(() => {
//     setTimeout(() => {
//       setMessageToUser("")
//     }, 3000);
//   }, [messageToUser]);
//   function setReturn() {
//     if(numberOfWordsToReturn==props.user.data[0].numberReturnEveryDay) {
//       setMessageToUser("This is exactly what was before, but ok")
//     }
//     else {
//       let values = {
//         name: props.user.data[0].name,
//         num: numberOfWordsToReturn 
//       }  
//       axios.post('http://localhost:3001/home/setNumberReturnEveryDay',values)
//       .then(function(response){
//         console.log(response);
//         setMessageToUser("The new value is absorbed,but you will see the change from the next time")
//       })
//       .catch(function(err){
//         console.log(err);
//         setMessageToUser("Something went wrong through no fault of yours. Try again later")
//       })
//     }
//   }
//   function setAdd() {
//     if(numberOfWordsToAdd==props.user.data[0].numberAddEveryDay) {
//       setMessageToUser("This is exactly what was before, but ok")
//     }
//     else {
//       let values = {
//         name: props.user.data[0].name,
//         num: numberOfWordsToAdd
//       }  
//       axios.post('http://localhost:3001/home/setNumberAddEveryDay',values)
//       .then(function(response){
//         console.log(response);
//         setMessageToUser("The new value is absorbed,but you will see the change from the next time")
//       })
//       .catch(function(err){
//         console.log(err);
//         setMessageToUser("Something went wrong through no fault of yours. Try again later")
//         setTimeout(() => {
//           setMessageToUser("")
//         }, 3000);
//       })
//     }
//   }

//     return (
//       <div style={{textAlign:"center"}}>
//         <h3>Right now, the number of words to repeat every day: {props.user.data[0].numberReturnEveryDay}</h3>
//         <h3>To change, change and send</h3>
//         <form onSubmit={(e)=>{e.preventDefault();setReturn()}}>
//           <input value={numberOfWordsToReturn} onChange={e => setNumberOfWordsToReturn(e.target.value)} type="number" min="2" max="30"></input>
//           <button type="submit">change</button>
//         </form>
//         <h3>Right now, the number of words to add every day: {props.user.data[0].numberAddEveryDay}</h3>
//         <h3>To change, change and send</h3>
//         <form onSubmit={(e)=>{e.preventDefault();setAdd()}}>
//           <input value={numberOfWordsToAdd} onChange={e => setNumberOfWordsToAdd(e.target.value)} type="number" min="1" max="15"></input>
//           <button type="submit">change</button>
//         </form>
//         <h3>{messageToUser}</h3>
//       </div>
//     )
//   }
//   export default UserSettings