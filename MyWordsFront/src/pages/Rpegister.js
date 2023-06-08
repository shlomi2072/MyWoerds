import axios from 'axios';
import React, {useLayoutEffect, useState } from 'react'
import { json, useNavigate, useSubmit } from 'react-router-dom';




// function Register () {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [registerMessage, setRegisterMessage] = useState("");
//   const [errorMessege, setErrorMessege] = useState("");  
//   let navigate = useNavigate()
 
//   function submitValues () {
//     if (name==""||password==""||email=="") {
//       window.location.reload()
//       alert("Please fill all the feilds")
//     }
//     else{
//       let values = {
//         name : name,
//         password : password,
//         email : email
//       }
//       axios.post('http://localhost:3001/register',values)
//       .then(function(response){
//         if(response.data.ok=="yes") {
//           setRegisterMessage("The register was successful! We will immediately go to the home page");
//           localStorage.setItem('userToken', response.data.token);
          
//           setTimeout(() => {
//               navigate("home")
//           }, 3000);
//         }
//         else {
//           alert("It seems that one of your details is already in use by another user. Try changing one of them")
//           window.location.reload()
//         }
//       })
//       .catch(function(error){
//         setErrorMessege("Hi we have a problem with our server...try later");
//         setTimeout(() => {
//           window.location.reload()  
//         }, 5000);
        
//         console.log(error);
//       })
//     }
//   }
//   return (
//    <div>     
//     <h1>register</h1>
//     <h1>{registerMessage}</h1>
//     <input type="text" id="fname" name="fname" placeholder="user name" onChange={e => setName(e.target.value)}/><br></br>
//     <input type="password" id="pwd" name="pwd" placeholder="password" onChange={e => setPassword(e.target.value)}/><br></br>
//     <input type="email" id="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/><br></br>
//     <button onClick={submitValues}>Submit</button> 
//     <h1>{errorMessege}</h1>
//    </div>
//   )
// }
// export default Register;