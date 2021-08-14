import React from 'react'
import emailjs from "emailjs-com";
import "../../css/Feed/Feed.css";
import {useHistory} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
const Feedback = () => {
    const history= useHistory();

    function sendEmail(e) {
        e.preventDefault();
        const Name=document.getElementById("Name").value.trim();
        const Email=document.getElementById("Email").value.trim();
        const Textare=document.getElementById("Textare").value.trim();
        if(Name==="" || Email==="" || Textare===""){
            alert("Enter some data");
        }
        else{
            emailjs.sendForm('service_koundi', 'template_ywimchr', e.target, 'user_NoAYEf5NbxWcXTsa6fT5x')
            .then((result) => {
                if(result.status===200){
                    alert("Thank You 😎");
                    history.goBack();
                }
            }, (error) => {
                alert("Oops! Something Wrong 🥺");
               console.log(error.text);
            });
            e.target.reset();
        }
    }
    const pushingBack=()=>{
        history.goBack();
    }
    return (
        <div className="Feedback">
        <FontAwesomeIcon icon={faChevronCircleLeft} onClick={pushingBack} className="Back"/>
           <div className="Inside__Feedback">
                <div className="Feedback__header">Provide Feedback🤩</div>
                <form onSubmit={sendEmail}>
                        <div className="Feedback__form1">
                            <label>
                                <span>
                                    Enter Your Name :
                                </span>
                                <input type="text" name="name" id="Name" />
                                </label>
                            <label>
                                <span className="lefting">
                                    Any Bugs :
                                </span>
                                <input type="text" name="subject" id="Email" />
                            </label>
                        </div>
                        <div className="Feedback__form2">
                            <label>
                                <span>Provide Feedback Here 👇</span> 
                                <textarea  rows="4" cols="50" name="about"  id="Textare"  />
                            </label>
                            <input type="submit" name="email" id="sendFeedback" value="send feedback" />
                        </div>
                    </form>
           </div>
        </div>
    )
}

export default Feedback
