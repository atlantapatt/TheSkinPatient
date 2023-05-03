import { useEffect, useState } from "react";
import './CSS/Account.css'
import EditAccount from "./EditAccount";
import ReviewCard from "./ReviewCard";
import DeleteAccount from "./DeleteAccount";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TopThree from "./TopThree";

function Account({user, setUser, topThree}) {
    const [accountReviews, setAccountReviews] = useState([])
    const [newPhoto, setNewPhoto] = useState()
   const [deleteAccount, setDeleteAccount] = useState(false)
    const [bio, setBio] = useState(user.bio)
    const [editing, setEditing] = useState(false)
    
const history = useHistory()
console.log(user)
console.log(accountReviews)

useEffect(() => {
    fetch(`/myreviews/${user.id}`).then((response) => {
        if (response.ok) {
            response.json().then((reviews) => setAccountReviews(reviews))
        }
    })
},[])

    useEffect(() => {
        if (user.bio == ''){
            setBio("No Bio Written")
        }
    },[])

    function routeMyProducts() {
        history.push('/myproducts')
        console.log('go to my products')
     }
    
     function routeMyWishlist() {
        history.push('/mywishlist')
        console.log('go to my wishlist')
     }

    let mappedAccountReviews = accountReviews.map((review) => {
        return <div className="account-reviews">
        <div className="account-review-image">
            <img id="product-image" src={review.product.image}></img>
        </div>
        <ReviewCard review={review} />
        </div>
    })

    function onDelete() {
        console.log('delete')
        fetch('/users/1', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                setUserId(null)
            }
        })
    }

    let myTopThree = topThree.map((item) => {
        console.log(item)
        return  <div className="wishlist-div">
            <TopThree item={item} />
        </div>
        
     })

    return ( 
        <div className="account">
            <div className={`delete-div ${deleteAccount ? 'active' : 'inactive'}`}>
                <DeleteAccount setDeleteAccount={setDeleteAccount} onDelete={onDelete}/>
            </div>
            <br></br>
            <div className="user-profile">
                <div className="user-image">
                    {user.image == null ? <i id="icon" class="fa-solid fa-user"></i> : <img id="image" src={user.image}></img>}
                </div>
              <p>{user.username}</p>
              <div className="account-interact">
                    <div onClick={(() => setEditing(!editing))} id="edit" className="edit-profile">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <p>Edit Profile</p>
                    </div>
                    <div id="delete" className="edit-profile" onClick={(() => setDeleteAccount(true))}>
                        <i class="fa-solid fa-trash"></i>
                        <p>Delete Profile</p>
                    </div>
                </div>
                <p>{user.username}'s Bio:</p>
                <p>{user.bio}</p>  
                {editing ? <EditAccount editing={editing} setEditing={setEditing} setUser={setUser} setBio={setBio} setNewPhoto={setNewPhoto} newPhoto={newPhoto} bio={bio} user={user} /> : null}

            </div>
            <div className="user-reviews">
                <p>Reviews</p>
                {accountReviews.length == 0 ? <p>No Reviews Yet! Write Some!</p> : mappedAccountReviews}
            </div>
           <div className="account-links">
                <h3 className="click" onClick={routeMyProducts}>My Products</h3>
                <h3 className="click" onClick={routeMyWishlist}>My Wishlist</h3>
                <p>Wishlist Top 3</p>
                {topThree.length == 0 ? <p>Nothing in Wishlist Yet</p> : myTopThree}
           </div>
           
            
        </div>
     );
}

export default Account;