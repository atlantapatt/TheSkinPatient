import { useState } from "react";
import ProductsAccount from "./ProductsAccount";

function MyProducts({myProducts, goHome}) {
    const [productID, setProductID] = useState()


    function deleteMyProducts() {
        fetch(`/my_products/${productID}`, {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                console.log('deleted!')
            }
        })
    }

    console.log(myProducts)
    const mappedMyProducts = myProducts.map((item) => {
        console.log(item)
        return <ProductsAccount setProductID={setProductID} onDelete={deleteMyProducts} item={item} />
        //render needs item.product
    })

    return ( 
        <div className="my">
            <button onClick={goHome}>Back</button>
            <p>MY PRODUCTS</p>
            {mappedMyProducts}
        </div>
     );
}

export default MyProducts;