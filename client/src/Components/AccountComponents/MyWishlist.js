import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductsAccount from "./ProductsAccount";

function MyWishlist({setUrl, wishlistId, myWishlist}) {
    

let mappedWishlist = myWishlist.map((item) => {
    return <ProductsAccount item={item.product} />
})

      
      console.log(wishlistId)
      console.log(myWishlist)
    return ( 
        <div>
            MY WISHLIST
            {mappedWishlist}
        </div>
     );
}

export default MyWishlist;