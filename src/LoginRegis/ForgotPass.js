import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPass.css';
import '../App.css'

export default function ForgotPass() {
    return (
        <div className="text-center m-5-auto">
            <h2>Password Reset Form</h2>
            <h5>Enter Your Mail Id And We Will Send You A New Password</h5>
            <form action="/login">
                <div>
                    <label id="reset_pass_lbl">Mail Id :</label><br/>
                    <input type="email" name="email" required />
                </div>
                <br /> {/*Line Space*/}
                <div>
                    <button id="sub_btn" type="submit">SEND PASSWORD RESET MAIL</button>
                </div>
            </form>
            <footer>
                <div>First time ?<Link to="/register"> Create An Account</Link> .</div>
                <br /> {/*Line Space*/}
                <div><Link to="/">Back To Homepage</Link></div>
            </footer>
        </div>
    )
}