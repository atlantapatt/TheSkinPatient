import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function MyWishlist({setUrl, wishlistId, myWishlist}) {
    

let mappedWishlist = myWishlist.map((item) => {
    return <ProductCard setUrl={setUrl} item={item} />
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