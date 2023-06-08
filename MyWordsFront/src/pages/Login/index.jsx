import axios from 'axios';
import React, { useState } from 'react'
import style from './style.module.css'
import Logo from '../../components/logo/index';
import MyForm from '../../components/Form';
import { useNavigate } from "react-router-dom";




export default function Login() {
  let navigate = useNavigate();
  function moveToRegister(){
    navigate("/register", { replace: true });
  }
    
    return (
        <div className={style.body}>
            <Logo />
            <MyForm textButton={"sign in"}/>
            <button onClick={moveToRegister} textButton={"sign in"}>Brand new here? Sign up now!</button>
            <button>Forgot password?</button>
        </div>
    )
}