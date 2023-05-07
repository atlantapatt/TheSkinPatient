import { useEffect, useState } from "react";
import ConfirmPopUp from "./ConfrimPopUp";
import WriteReview from "./WriteReview";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";

function ProductInfo({newImage, setNewImage ,url, onClick, confirmed, setConfirmed, setCurrentProduct, currentProduct, addToProducts, addWishClick, setWriteReview, writeReview, setRating, setInfo, addToReview, reviews}) {

    // useEffect(() => {
    //     fetch(`/products/${url}`).then((response) => {
    //         if (response.ok) {
    //             response.json().then((product) => setCurrentProduct(product))
    //         } 
    //     })
    // },[])

    console.log(currentProduct)
    // console.log(image.slice(1) == newImage)



    let image = currentProduct.image


    // console.log(image.slice(0))

    useEffect(() => {
        if (image !== undefined) {
           setNewImage(image.slice(1))
        }
        
    },[currentProduct])
    console.log(newImage)



    let mappedReviews = reviews.map((review) =>{
        return <ReviewCard review={review} />
    })

    return ( 
        <div className="product-div">
            <button onClick={onClick}>BACK</button>
            <div className={`confirm ${confirmed ? 'active' : 'inactive'}`}>
                <ConfirmPopUp setConfirmed={setConfirmed} />
            </div>
            <br></br>
            <div className="product-info">
                <div className="product-image">
                    {newImage ? <img src={newImage}></img> : <Loading />}
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

export default ProductInfo;