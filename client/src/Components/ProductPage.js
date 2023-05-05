import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './CSS/ProductPage.css'
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";
import ConfirmPopUp from "./ConfrimPopUp";
import ProductInfo from "./ProductInfo";
import Loading from "./Loading";

function ProductPage({userId, user ,addToMyProducts ,wishlistId, addReviews, addToWishlist, reviews, setReviews, url, currentProduct, setCurrentProduct}) {
    const [writeReview, setWriteReview] = useState(false)
    const [rating, setRating] = useState()
    const [info, setInfo] = useState('')
    const [confirmed, setConfirmed] = useState(false)

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
        history.push('/allproducts')
    }

//not saving
//needs .product
    function addToProducts() {
        fetch(`/my_products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                product_id: currentProduct.id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((product) => addToMyProducts(product.product))
                
            } 
        })
        setConfirmed(true)
        console.log("added to my products")    
    }
//not saving
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
                r.json().then((wishlist) => addToWishlist(wishlist.product))
                
            } 
        })
        setConfirmed(true)
        console.log("added to wishlist")
    }

// console.log(currentProduct.id)
// console.log(userId)
// console.log(user.id)
// console.log(confirmed)


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


    // let mappedReviews = reviews.map((review) =>{
    //                     return <ReviewCard review={review} />
    //                 })


    console.log(confirmed)

    // // console.log(reviews.length == 0)
    // console.log(currentProduct.reviews)
    return ( 
        <div className="single-page">
                {currentProduct ? <ProductInfo url={url} onClick={onClick} confirmed={confirmed} setConfirmed={setConfirmed} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} addToProducts={addToProducts} addWishClick={addWishClick} setWriteReview={setWriteReview} writeReview={writeReview} setRating={setRating} setInfo={setInfo} addToReview={addToReview} reviews={reviews} mappedReviews={mappedReviews} /> : <Loading />}
        </div>
     );
}

export default ProductPage;
