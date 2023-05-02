import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './CSS/ProductPage.css'
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";

function ProductPage({userId, user ,addToMyProducts ,wishlistId, addReviews, addToWishlist, reviews, setReviews, url, currentProduct, setCurrentProduct}) {
    const [writeReview, setWriteReview] = useState(false)
    const [rating, setRating] = useState()
    const [info, setInfo] = useState('')

    const history = useHistory()

   
    // console.log(`current wishlist: ${wishlistId}`)
    
    

    useEffect(() => {
        fetch(`/products/${url}`).then((response) => {
            if (response.ok) {
                response.json().then((product) => setCurrentProduct(product))
            } 
        })
    },[url])

    useEffect(() => {
        fetch(`/products/${url}`).then((response) => {
            if (response.ok) {
                response.json().then((product) => setReviews(product.reviews))
            } 
        })
    },[])


    function onClick() {
        console.log('go back')
        history.push('/products')
    }

    console.log(user.id)

    function addToProducts() {
        fetch(`/my_products/${user.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: userId,
                product_id: currentProduct.id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((product) => addToMyProducts(product))
            } 
        })
        console.log("added to my products")    }

    function addWishClick() {
        fetch(`/product_wishlists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                wishlist_id: user.id,
                product_id: currentProduct.id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((wishlist) => addToWishlist(wishlist))
            } 
        })
        console.log("added to wishlist")
    }

console.log(currentProduct.id)
console.log(userId)
console.log(user.id)
console.log(wishlistId)


    function addToReview(e) {
        e.preventDefault() 
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               user_id: user.id,
               product_id: currentProduct.id,
               rating,
               info
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((review) => addReviews(review))
            } 
        })
        setWriteReview(false)
    }


    let mappedReviews = reviews.map((review) =>{
                        return <ReviewCard review={review} />
                    })


    // console.log(mappedReviews)

    // // console.log(reviews.length == 0)
    // console.log(currentProduct.reviews)

    return ( 
        <div className="product-div">
            <button onClick={onClick}>BACK</button>
            <div className="product-info">
                <div className="product-image">
                    <img src={currentProduct.image}></img>
                </div>
                <div className="product-text">
                    <h3>{currentProduct.className}</h3>
                    <h4>{currentProduct.brand}</h4>
                    <h5>{currentProduct.category}</h5>
                    <p>{currentProduct.description}</p>
                </div>
                <div className="product-buttons">
                    <button onClick={addToProducts}>Add To My Products</button>
                    <button onClick={addWishClick}>Add to Wishlist</button>
                </div>
            </div>
            
            <div className="product-reviews">
                <button onClick={(() => setWriteReview(!writeReview))}>Write Review</button>
                <br></br>
                {writeReview ? <WriteReview setRating={setRating} setInfo={setInfo} addToReview={addToReview} /> : null}
                {reviews.length == 0 ? "Be the first to review!" : mappedReviews} 
            </div>
        </div>
     );
}

export default ProductPage;
