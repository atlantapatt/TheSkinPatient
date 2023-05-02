import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductsAccount from "./ProductsAccount";
// import './MyItems.css'

function MyWishlist({ wishlistId, myWishlist, goHome}) {
    

    function deleteMyWishlist() {
        console.log('delete my wishlist')
    }

// let mappedWishlist = myWishlist.map((item) => {
//     return <ProductsAccount item={item} />
// })

const mappedWishlist = myWishlist.map((item) => {
    console.log(item)
    return <ProductsAccount onDelete={deleteMyWishlist} item={item} />
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