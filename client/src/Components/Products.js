import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({products, setProducts}) {
console.log(products)
    useEffect(() => {
        fetch('/products').then((response) => {
            if (response.ok) {
                response.json().then((products) => setProducts(products))
            }
        })
    },[])

    const mappedClothes = products.map((item) => {
        return <ProductCard item={item} />
    })

    return ( 
        <div>
            {mappedClothes}
        </div>
     );
}

export default Products;