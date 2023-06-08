import style from './style.module.css'
import Logo from '../../components/logo'
import MyForm from '../../components/Form'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';






export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    });
    const handleInputChange = (e) => {
        if (e.target.name == "number") { setFormData({ ...formData, number: e.target.value.replace(/-/g, '') }) }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    let navigate = useNavigate();
    function moveToRegister() {
        navigate("/login", { replace: true });
    }
    console.log("name: " + formData.name);
    console.log("email: " + formData.email);
    console.log("number: " + formData.number);
    console.log("password: " + formData.password);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Regular expression patterns for validation
        const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/;
        const numberPattern = /^[0-9]{10,16}$/;

        if (!usernamePattern.test(formData.name)) {
            alert('Username must be alphanumeric and between 3-20 characters.');
            return;
        }

        // Check password against the pattern
        if (!passwordPattern.test(formData.password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 6-20 characters.');
            return;
        }
        if (!numberPattern.test(formData.number)) {
            alert('number must contain at least ten digits,and not another characters');
            return;
        }

        let values = {
            name: formData.name,
            password: formData.password,
            email: formData.email,
            number: formData.number
        }
        axios.post('http://localhost:3001/register', values)
            .then(function (response) {
                console.log(response);
                if (response.data.ok) {
                    //   setRegisterMessage("The register was successful! We will immediately go to the home page");
                    //   localStorage.setItem('userToken', response.data.token);
                }
                else {
                    //   alert("It seems that one of your details is already in use by another user. Try changing one of them")
                    //   window.location.reload()
                }
            })
            .catch(function (error) {
                // setErrorMessege("Hi we have a problem with our server...try later");
                console.log(error);
            })


    }
    return (
        <div className={style.body}>
            <Logo />
            <MyForm email={true} phone={true} textButton={"sign up"} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <button onClick={moveToRegister}>Already registered? log in!</button>
        </div>
    )
}
