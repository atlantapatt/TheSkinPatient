import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({products, setProducts, url, setUrl, setCurrentProduct, currentProduct}) {
// console.log(products)
    

    const mappedClothes = products.map((item) => {
        return <ProductCard url={url} setUrl={setUrl} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}  item={item} />
    })

    return ( 
        <div>
            {mappedClothes}
        </div>
     );
}

export default Products;