import { useState } from "react";

function SignupBox({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function signup(e) {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((r) => {
            r.json().then((user) => setUser(user))
        })
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