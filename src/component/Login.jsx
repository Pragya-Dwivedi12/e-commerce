import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.length || !email.length || !password.length) {
            alert("Please Fill All The Details");
            return;
        }
        const userData = {
            name, email, password
        };
        console.log(userData);
    };
    return (
        <>
            <div className="Fill3">

                <form onSubmit={handleSubmit}>

                    <div className="img">
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png" height="80px" width="80px" alt="image" />
                    </div>

                    <div className="NameName">
                        <label className="NameName1">Name:-</label>
                        <input type="text" className='Name1' name="name" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div><br />


                    <div className="NameName">
                        <label className="NameName3">Password:-</label>
                        <input type="password" className='Name111' name="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <p className='Forget1'>Forget Password ?</p>
                    </div><br />

                    <div>
                        <button className="clickme2">Login</button>
                    </div>
                </form>
            </div>
        </>

    )
}