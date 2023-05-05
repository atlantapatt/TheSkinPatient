import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({products, setProducts, url, setUrl, setCurrentProduct, currentProduct}) {
// console.log(products)
    

    const mappedProduct = products.map((item) => {
        return <ProductCard url={url} setUrl={setUrl} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}  item={item} />
    })

    return ( 
        <div>
            {products.length == 0 ? <Loading /> : mappedProduct}
        </div>
     );
}

export default Products;