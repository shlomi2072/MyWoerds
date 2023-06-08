import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from "./pages/NoPage";
import { useState } from 'react';
// import PracticeRepetition from './pages/PracticeRepetition';
// import AdditionPractice from './pages/AdditionPractice';
// import UserSettings from './pages/UserSettings';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        {/* // <Route path="home" element={<Home />} /> 
        // <Route path="home/PracticeRepetition" element={<PracticeRepetition />} />
        // <Route path="home/PracticeRepetition/additionPractice" element={<AdditionPractice />} />
        // <Route path="home/userSettings" element={<UserSettings />} />  */} 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
