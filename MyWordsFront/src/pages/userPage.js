import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useSubmit } from 'react-router-dom';



// function HomePage() {
//   const [userData, setUserData] = useState({});
//   let navigate = useNavigate()
//   function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
//   }
//   useEffect(() => {
//     let tokenFromLocalStorge = localStorage.userToken
//     if (tokenFromLocalStorge == null) {
//       // window.location.assign('http://localhost:3000')
//       navigate("../")
//     }
//     else {
//       axios.post('http://localhost:3001/home/checkToken', { token: tokenFromLocalStorge })
//         .then(function (response) {
//           if (response.data == "no") {
//             // window.location.assign('http://localhost:3000')
//             navigate("../")
//           }
//           else {
//             axios.post('http://localhost:3001/home/getUser', { name: response.data.name })
//               .then(function (response) {
//                 console.log(response);
//                 setUserData(response);
//               })
//               .catch(function (err) {
//                 console.log(err);
//               })
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//   }, [])
//   return (
//     <div>
//       {isEmpty(userData) == false &&
//         <>
//           <header style={{ fontSize: "80px", textAlign: "center", color: "red" }}>Hi {userData.data[0].name}! Nice to see you every day!</header>
//           <button onClick={() => navigate("PracticeRepetition")} style={{ fontSize: "40px", marginLeft: "500px", color: "blue" }}>To daily practice</button>
//           <button onClick={() => navigate("userSettings")} style={{ fontSize: "15px", marginLeft: "590px", color: "blue" }}>to my settings</button>
//         </>
//       }
//     </div>
//   )
// }

// export default HomePage;
