import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import '../App.css'


export default function RegistrationForm() {
    const nav = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      nav("/");
    };
  
    return (
        <div className="text-center m-5-auto">
            <h2>Registration Form</h2>
            <h5>Create Your Personal Account</h5>
            <form form onSubmit={handleSubmit}>
                <div>
                    <label>Username :</label><br/>
                    <input type="text" name="first_name" required />
                </div>
                <div>
                    <label>Mail Id :</label><br/>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password :</label><br/>
                    <input type="password" name="password" requiredc />
                </div>
                <br /> {/*Line Space*/}
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I Agree To All The <a href="https://google.com" target="_blank" rel="noopener noreferrer"> Terms Of Service</a></span> .
                </div>
                <br /> {/*Line Space*/}
                <div>
                    <button id="sub_btn" type="submit">REGISTER</button>
                </div>
            </form>
            <footer>
                <div><Link to="/">Back To Homepage </Link></div>
            </footer>
        </div>
    )

}