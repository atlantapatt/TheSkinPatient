import { useState } from "react";

function LoginBox({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        fetch('login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    // let myErrors = errors.map((err) => {
    //     return (
    //         <p className="errors">{err}</p>
    //     )
    // })
    return ( 
        <div className="login">
            <form onSubmit={onSubmit}>
                <div className="inputs">
                    <label>Username: </label>
                    <br></br>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    <label>Password: </label>
                    <br></br>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button >Submit</button>
                <form className="error-form">
                    {/* {myErrors} */}
                </form>
            </form>
        </div>
     );
}

export default LoginBox;