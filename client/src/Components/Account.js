import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import EditAccount from "./EditAccount";

function Account({user, setUser}) {
    const [hasPhoto, setHasPhoto] = useState()
    const [newPhoto, setNewPhoto] = useState()
   
    const [bio, setBio] = useState('')
    const [editing, setEditing] = useState(false)
    

console.log(user)

    useEffect(() => {
        if (user.bio.length == 0){
            setBio("No Bio Written")
        }
    },[])

    console.log(user.image)
    return ( 
        <div>
            ACCOUNT
            <br></br>
            <div className="user-profile">
                <p>{user.image}</p>
                <img src={user.image}></img>
              {/* {hasPhoto ? <img src={user?.image}></img> : <i class="fa-solid fa-user"></i>} */}
              <p>Username: {user.username}</p>
                <div onClick={(() => setEditing(!editing))} className="edit-profile">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <p>Edit Profile</p>
                </div>
                <div className="delete-profile">
                    <i class="fa-solid fa-trash"></i>
                    <p>Delete Profile</p>
                </div>
                <p>{user.bio}</p>  
            </div>
            {editing ? <EditAccount setUser={setUser} setBio={setBio} setNewPhoto={setNewPhoto} newPhoto={newPhoto} bio={bio} user={user} /> : null}
           
            
        </div>
     );
}

export default Account;