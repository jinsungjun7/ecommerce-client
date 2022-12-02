import React, { useState } from 'react'
import '../css/signup.css'
import { UilRocket } from '@iconscout/react-unicons'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://space-y-backend.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    const data = await response.json();
    console.log(data)
    if(data.token) {
        alert('Login successful');
        props.setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data));
        return navigate("/");
        // window.location.href = '/ecommerce';
        
    } else {
        console.log(data.status)
        alert('Please check username and password!');
    }

  }

  return (
    <div id='signup-container'>
        <div className="left-panel">
            <div className="odinheader">
                <UilRocket size='3rem' style={{color:'white', marginTop:'6px'}}/>
                <h1 className="odin">SPACE-Y</h1>
            </div>
            <footer className="imagecredit">Photo by <a href="https://unsplash.com/@iangvalerio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ian Valerio</a> on <a href="https://unsplash.com/s/photos/anime?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </footer>
        </div>
        <div className="right-panel">
                
            <form action="" method="get" onSubmit={loginUser}>
                <fieldset className="form-fields" style={{padding:'16px 32px'}}>
                    <div className="form-header">Please log in.</div>
                    <div className="form-body">
                        <div className="input">
                            <label htmlFor="username">USERNAME</label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" id="password" required className="error" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                </fieldset>
                <Button type='submit' className="submit">Log in</Button>
            </form>

            <div className="login">
                Don't have an account? 
                <Link to='/register' style={{fontWeight:'600', color:'black', paddingLeft:'4px'}}>Sign up</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Login