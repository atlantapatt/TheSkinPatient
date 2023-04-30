import { useEffect, useState } from "react";

function SignupBox({setUser, user}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function signup() {
        fetch('signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user)) 
            } else {
                //find out how to get full messages
                r.json().then((err) => setErrors(err.exception.slice(-49,-1)))
            }
        })
        if (!user == null) {
        fetch('/wishlists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((wishlist) => console.log(wishlist))
            } 
        })
    }
    }
console.log(user)
    // function createWishlist() {
     


    function onSubmit(e) {
        e.preventDefault()
        signup()
        console.log(user)
        // createWishlist()
    }


    // let myErrors = errors.map((err) => {
    //     return (
    //         <p className="errors">{err}</p>
    //     )
    // })

    return ( 
        <div className="signup">
            <form onSubmit={onSubmit}>
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
                <form className="error-form">
                    <p className="errors">{errors}</p>
                </form>
            </form>
        </div>
     );
}

export default SignupBox;