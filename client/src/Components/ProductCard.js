import { useHistory } from "react-router-dom";
import "./CSS/ProductCard.css"
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
function ProductCard({item, url, setUrl, setCurrentProduct , currentProduct}) {
    

    const history = useHistory()
    function productPageRoute() {
        //include reviews
        fetch(`/products/${url}`).then((response) => {
            if (response.ok) {
                response.json().then((product) => setCurrentProduct(product))
            }
        })
        console.log(currentProduct)
        history.push(`/${url}`)
        
        // console.log(currentProduct)
        // setProductName(currentProduct.name)
        // console.log(productName)
        // history.push(`/${productName}`)
    }

    function onHover() {
        setUrl(item.id)
        console.log(url)
    }

    // function onLeave() {
    //     setUrl('')
    //     setCurrentProduct([])
    // }




    return ( 
        <div className="item-card" onMouseEnter={onHover} onClick={productPageRoute}>
            <div className="image">
                <img src={item.image}></img>
            </div>
            <br></br>
            <div className="item-text">
                <h4>{item.name}</h4>
                <h5>{item.brand}</h5>
                <p>{item.category}</p>
            </div>
            
        </div>
     );
}

export default ProductCard;