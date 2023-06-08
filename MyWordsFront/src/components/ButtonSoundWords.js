import { useState } from "react";






    function ButtonSoundWords(props){
        const [messageEror, setMessageEror] = useState("");

        function sound(){
            try{
                let value = props.word;
                const utterThis = new SpeechSynthesisUtterance()
                const synth = window.speechSynthesis
                utterThis.text = value
                synth.speak(utterThis)
            }
            catch{
                setMessageEror("Something went wrong with this story. Maybe your device doesn't support it.");
            }    
        }
        
        return(
            <>
                <button style={{ backgroundImage: `url("https://img.icons8.com/material-rounded/24/null/portable-speaker2.png")`, 
                    height: 28, width: 28 }} onClick={sound}>
                </button>     <span style={{color: "red"}}>{messageEror}</span>      
            </>
        )


    }


export default ButtonSoundWords;