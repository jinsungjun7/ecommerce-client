import React, { useState } from 'react'
import '../css/signup.css'
import { UilRocket } from '@iconscout/react-unicons'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    // check fields
    const response = await fetch('http://space-y-backend.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, 
            password,
            confirmPassword
        })
    })
    
    const data = await response.json();
    console.log(data.token)
    if (data.token) {
        alert('Account successfully created');
        window.location.href = '/ecommerce/login'
    } else {
        alert('Your account was unable to be created due to: ' + data.error)
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
            <div className="right-header">
                <p>This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up <em>now</em> to get started.</p>
                <p>You <em>know</em> you want to.</p>
            </div> 
            <form method="POST" onSubmit={registerUser}>
                <fieldset className="form-fields">
                    <div className="form-header">Let's do this!</div>
                    <div className="form-body">
                        <div className="input">
                            <label htmlFor="username">USERNAME</label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" id="password" required className="error" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="password-conf">CONFIRM PASSWORD</label>
                            <input type="password" name="password-conf" id="password-conf" required className="error confirm" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                </fieldset>
                <Button type="submit" className="submit">Create Account</Button>
            </form>
            <div className="login">
                Already have an account? 
                <Link to="/login" style={{fontWeight:'600', color:'black', paddingLeft:'4px'}}>Log in</Link>
            </div> 
        </div>
    </div>
  )
}

export default Register