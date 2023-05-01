import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductsAccount from "./ProductsAccount";

function MyWishlist({setUrl, wishlistId, myWishlist}) {
    

// let mappedWishlist = myWishlist.map((item) => {
//     return <ProductsAccount item={item} />
// })

const mappedWishlist = myWishlist.map((item) => {
    return <ProductsAccount item={item} />
})

      
      console.log(wishlistId)
      console.log(myWishlist)
    return ( 
        <div className="wishlist-div">
            MY WISHLIST
            {mappedWishlist}
        </div>
     );
}

export default MyWishlist;