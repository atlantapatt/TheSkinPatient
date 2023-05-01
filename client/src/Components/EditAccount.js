import { useState } from "react"

function EditAccount({setBio, bio, newPhoto, user, setNewPhoto, setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    function handleImageChange(e) {
        setNewPhoto(e.target.files[0])
        console.log(newPhoto)
    }

    function updateProfile(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', newPhoto)
        formData.append('username', username)
        formData.append('password', password)
        formData.append('bio', bio)

        fetch(`users/${user.id}`, {
            method: "PATCH",
            body: formData,
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((updateProfile) => {
                    setUser(updateProfile)
                })
            } else
            r.json().then((err) => console.log(err.errors))
        })
    }
  
console.log(user.image)
    return ( 
        <div className="editing">
            <form onSubmit={updateProfile}>
                <lable>Username: </lable>
                <input onChange={((e) => setUsername(e.target.value))} type="text"></input>
                <br></br>
                <lable>Password: </lable>
                <input onChange={((e) => setPassword(e.target.value))} type="text"></input>
                <br></br>
                <label>Bio: </label>
                <textarea onChange={((e) => setBio(e.target.value))}></textarea>
                <br></br>
                <input type="file" accept="image/*" onChange={handleImageChange}></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
     );
}

export default EditAccount;