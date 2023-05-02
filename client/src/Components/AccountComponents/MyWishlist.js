import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductsAccount from "./ProductsAccount";
// import './MyItems.css'

function MyWishlist({deleteMyItems, wishlistId, myWishlist, goHome}) {
    

// let mappedWishlist = myWishlist.map((item) => {
//     return <ProductsAccount item={item} />
// })

const mappedWishlist = myWishlist.map((item) => {
    console.log(item)
    return <ProductsAccount deleteMyItems={deleteMyItems} item={item.product} />
            //render needs item.product

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