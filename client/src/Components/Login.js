import { useState } from "react";
import './CSS/Login.css'
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";

function Login({setUser}) {
    const [login, setLogin] = useState(true)
    const loginp = <p onClick={(() => setLogin(false))}>Not a User? Signup Here!</p>
    const signup = <p onClick={(() => setLogin(true))}>Already a User? Login Here</p>
    
    
    return ( 
        <div className="login-div">
            
            <div className="login-box">
                <h3>Welcome!</h3>
                {login ? <LoginBox setUser={setUser} /> : <SignupBox />}
                {login ? loginp : signup}
            </div>
        </div>
     );
}

export default Login;