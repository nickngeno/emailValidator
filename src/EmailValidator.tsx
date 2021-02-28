import React from 'react'
import axios from 'axios';
import {useState} from 'react'
import ShowValidation from './ShowValidation';


const EmailValidator = () => {

    const [email, setEmail] = React.useState<string>("");
    const [emailstatus, setEmailstatus] = React.useState<string>("");
    const [validationReason, setValidationReason] = useState<string>('');
    const [showreason, setShowReason] = useState<string>('yes');

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) :void =>{
        e.preventDefault();
    
        axios({
            "method":"GET",
            "url":"https://email-checker.p.rapidapi.com/verify/v1",
            "headers":{
                "content-type":  "application/octet-stream",
                "x-rapidapi-host": "email-checker.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
            }, "params": {
                "email": encodeURI(email)
         
            }
        })
        .then(({data})=>{

            setEmailstatus(data.status);
            setValidationReason(data.statusText)

        })
        .catch((error)=>{
            console.log(error)
        })

    }

    return (
        <div>
            <label>Input your email below</label><br></br>
            <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                <div>
                    <fieldset>
                        <legend>Show reason for email validation status</legend>
                        <label htmlFor="yes-show">Yes</label>
                        <input type="radio"
                            name="reason"
                            id="yes-show"
                            value="yes"
                            onChange={(e) => setShowReason(e.target.value)}/><br />
                        <label htmlFor="no-show">No</label>
                        <input type="radio"
                            name="reason"
                            id="no-show"
                            value="no"
                            onChange={(e) => setShowReason(e.target.value)}
                        />
                    </fieldset>
                </div>
                <button type="submit">Submit</button>
                
            </form>
            <ShowValidation status={emailstatus} reason={validationReason} show ={showreason === "yes" ? true : false}  />
        </div>
    )
}

export default EmailValidator
