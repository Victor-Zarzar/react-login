import { useState } from "react";
import { RegisterUser } from "../Api";

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
      event.preventDefault();
  
      try {
        const response = await RegisterUser(email);
        console.log(response.data);       
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <div className='App'>
          <header className='App-header'>
            <div className="login-form-wrap">
            <h2>Login</h2>
            <form className='login-form'>
              <input type='email' name='email' placeholder='Email' required
              onChange={(event) => setEmail(event.target.value)} value={email}/>
              <input type='password' name='password' placeholder='Password' required
              onChange={(event) => setPassword(event.target.value)} value={password}/>
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