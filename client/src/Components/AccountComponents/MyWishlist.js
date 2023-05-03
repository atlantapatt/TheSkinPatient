import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductsAccount from "./ProductsAccount";
// import './MyItems.css'

function MyWishlist({ wishlistId, myWishlist, goHome}) {
    const [productID, setProductID] = useState()


    

const mappedWishlist = myWishlist.map((item) => {
    console.log(item)
    return <ProductsAccount setProductID={setProductID} item={item} />
           

})

      
      console.log(wishlistId)
      console.log(myWishlist)
    return ( 
        <div className="my">
            <button onClick={goHome}>Back</button>
            <p>MY WISHLIST</p>
            {mappedWishlist}
        </div>
     );
}

export default MyWishlist;