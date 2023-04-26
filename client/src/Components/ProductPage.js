import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ProductPage({url, currentProduct, setCurrentProduct}) {
    const history = useHistory()
    console.log(currentProduct)

    useEffect(() => {
        fetch(`/products/${url}`).then((response) => {
            if (response.ok) {
                response.json().then((product) => setCurrentProduct(product))
            }
        })
        console.log(currentProduct)
    },[])

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

    return ( 
        <div className="product-div">
            <button onClick={onClick}>BACK</button>
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
     );
}

export default ProductPage;