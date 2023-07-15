import { useState } from "react";
import axios from "axios";

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(email, password);

        // eslint-disable-next-line no-unused-vars
        const response = await axios.post("http://localhost:5000/login",
        JSON.stringify({email, password})
        );
    }

    return (
      <>
        <div className='App'>
          <header className='App-header'>
            <div className="login-form-wrap">
            <h2>Login</h2>
            <form className='login-form'>
              <input type='email' name='email' placeholder='Email' required
              onChange={(event) => setEmail(event.target.value)}/>
              <input type='password' name='password' placeholder='Password' required
              onChange={(event) => setPassword(event.target.value)}/>
              <button type='submit' className='btn-login'
              onClick={(event) => handleLogin(event)}>Login</button>
            </form>
            </div>
          </header>
        </div>
      </>
    )
  }
  
  export default Login