import ProductsAccount from "./ProductsAccount";

function MyProducts({myProducts}) {

    console.log(myProducts)
    const mappedMyProducts = myProducts.map((item) => {
        console.log(item)
        return <ProductsAccount item={item} />
    })

    return ( 
        <div className="my">
            <p>MY PRODUCTS</p>
            {mappedMyProducts}
        </div>
     );
}

export default MyProducts;