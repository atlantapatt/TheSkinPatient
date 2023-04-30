import { useState } from "react";

function SignupBox() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function signup(e) {
        e.preventDefault()
        console.log('signup')
    }
    return ( 
        <div className="signup">
            <form onSubmit={signup}>
                <label>Username: </label>
                <br></br>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <lable>Confirm Password</lable>
                <input type="text"></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
     );
}

export default SignupBox;