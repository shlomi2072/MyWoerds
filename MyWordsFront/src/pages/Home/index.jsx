import axios from 'axios';
import React,{useState} from 'react'
import style from './style.module.css'
import IconComponent from '../../components/IconsComponent';
import Logo from '../../components/logo/index';
import { useNavigate } from "react-router-dom";



// function Wellcome () {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginMessage, setLoginMessage] = useState("");
//   const [errorMessege, setErrorMessege] = useState("");
//   let navigate = useNavigate();

//   function submitValues () {
//     if(name==""||password=="") {
//       window.location.reload()
//       alert("full all the inputs please")
//     }
//     else{
//       let values = {
//         name: name,
//         password: password
//       } 
//       axios.post('http://localhost:3001/login', values)
//       .then(function (response) {
//         if(response.data.ok=="yes") {
//           console.log(response);
//           localStorage.setItem('userToken', response.data.token);
//          setLoginMessage("The login was successful! We will immediately go to the home page")
//           setTimeout(() => {
//               navigate("home")
//           }, 3000);
//         }
//         else {
//          alert("One or more of the details are incorrect or you are not registered");
//          window.location.reload()
//         }
//       })
//       .catch(function (error) {
//       setErrorMessege("Hi we have a problem with our server...try later");
//       setTimeout(() => {
//         window.location.reload()
//       }, 5000);
//        console.log(error);
//       });
//     }
//   }
//   return( 
//    <div>
//     <h1>Wellcome to the mywords!</h1>
//     <h1>login</h1>
//     <h1>{loginMessage}</h1>
//     <input type="text" id="fname" name="fname" placeholder="user name" onChange={e => setName(e.target.value)}/><br></br>
//     <input type="password" id="pwd" name="pwd" placeholder="password" onChange={e => setPassword(e.target.value)}/><br></br>
//     <button onClick={submitValues}>Submit</button><br></br>
//     <button onClick={()=>navigate("register")}>Not registered? Register!</button>
//     <h1>{errorMessege}</h1>
//    </div>
//   );
// }

  
// export default Wellcome;
export default function Home(){
  let navigate = useNavigate();
  function moveToLogin(){
    navigate("login")
  }
  return(
    <div className={style.body}>
        <IconComponent className={'fas fa-user-secret'} style={{ fontSize: '40px', color: 'rgb(95, 65, 89)', 
          marginTop:'5px',marginLeft:'5px',position:'absolute'}} function={moveToLogin}/>
        <Logo /> 
    </div>
  )
}