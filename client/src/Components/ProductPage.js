import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './CSS/ProductPage.css'
import ReviewCard from "./ReviewCard";

function ProductPage({reviews, setReviews, url, currentProduct, setCurrentProduct}) {
    const [reviewLength, setReviewLength] = useState(0)
    const history = useHistory()

    let mappedReviews
   
    // console.log(currentProduct.reviews)
    
    

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
    },[url])


    function onClick() {
        console.log('go back')
        history.push('/products')
    }

    function addToProducts() {
        console.log('add to products')
    }

    function addToWishlist() {
        console.log('add to wishlist')
    }

    useEffect(() => {
        if (reviews == undefined) {
            console.log('undefined reviews')
        } else {
            mappedReviews = reviews.map((review) =>{
                return <ReviewCard review={review} />
            })
        }
    },[url])
    
    // mappedReviews = reviews.map((review) =>{
    //                 return <ReviewCard review={review} />
    //             })
    //             console.log(mappedReviews)

    console.log(reviews)

    // console.log(reviews.length == 0)
    console.log(currentProduct.reviews)

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
                    <button onClick={addToWishlist}>Add to Wishlist</button>
                </div>
            </div>
            
            <div className="product-reviews">
                {reviews.length == 0 ? "empty" : "full"} 
            </div>
        </div>
     );
}

export default ProductPage;
// {reviews == [] ? "be the first to review!" : 'reviews!'}
// reviews == [] ? "Be the first to review!" : mappedReviews