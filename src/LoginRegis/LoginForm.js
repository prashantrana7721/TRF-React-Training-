import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './LoginForm.css';
import '../App.css'

export default function LoginForm() {
    const nav = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      nav("/trainreq");
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Login Form</h2>
            <h5>Registered Users Can Directly Login</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username Or Mail Id :</label><br/>
                    <input type="text" name="first_name" required />
                </div>
                <div>
                    <label>Password :</label>
                    <Link to="/forgotpass"><label className="right-label">Forgot Password ?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </div>
                <br /> {/*Line Space*/}
                <div>
                    <button id="sub_btn" type="submit">LOGIN</button>
                </div>
            </form>
            <footer>
                <div>First Time ? <Link to="/register"> Create An Account</Link> .</div>
                <br /> {/*Line Space*/}
                <div><Link to="/">Back To Homepage</Link></div>
            </footer>
        </div>
    )
}