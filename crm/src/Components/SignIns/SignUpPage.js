import React from 'react'
import Header from './Header'
import { useState } from "react";

function SignUpPage() {
    const [username, setText1] = useState("");
    const [password, setText2] = useState("");

    function attemptLogin() {
        alert(username+password);
      }

    return (
        <div style={{background:"#265573",width:'100%',height:'100%'}}>
            <Header text={"Sign in"} top_a={'20%'} />
            <Header text={""} top_a={'79.5%'} /> 
            <div style={{background: "#FFFCFC", width: 476.15, height:400,
                        position: 'absolute', left: '50%', top: '52.5%',
                        transform: 'translate(-50%, -50%)'}}>

                <p1 style={{top: '7%', left: '15%'}}>Username:</p1>

                <input className = "search-bar"
                style={{background:"#F0EBEB", border: 0, height: 28, width: '70%', top: '15%'}}
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setText1(e.target.value)}
                ></input>
                
                <p1 style={{top: '29%', left: '15%'}}>Password:</p1>
                
                <input className = "search-bar"
                style={{background:"#F0EBEB", border: 0, height: 28, width: '70%', top: '37%'}}
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setText2(e.target.value)}>   
                </input>

                <p2 style={{top: '48%', left: '13%'}}>Forgot Password</p2>

                <button className = "button2" onClick={attemptLogin}
                style={{width: "65%", margin: 10, left: '15%',top: '60%',}}>
                    <p>Sign in</p></button>

                <p2 style={{top: '75%', left: '15%',color:'black','text-decoration-line': 'None','font-size':10}}>New business?</p2>
                <p2 style={{top: '75%', left: '25%','font-size':10}}>Sign Up</p2>
            </div>
            
        </div>
    )
}

export default SignUpPage