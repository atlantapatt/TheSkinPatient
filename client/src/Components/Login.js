import { useState } from "react";
import './CSS/Login.css'
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";

function Login({setUser, user}) {
    const [login, setLogin] = useState(true)
    const loginp = <p className="isuser" onClick={(() => setLogin(false))}>Not a User? Signup Here!</p>
    const signup = <p className="isuser" onClick={(() => setLogin(true))}>Already a User? Login Here</p>
    
    console.log(user)
    return ( 
        <div className="login-div">
            
            <div className="login-box">
                <h3>Welcome!</h3>
                {login ? <LoginBox setUser={setUser} /> : <SignupBox setUser={setUser} user={user}/>}
                {login ? loginp : signup}
            </div>
        </div>
     );
}

export default Login;