import ProductsAccount from "./ProductsAccount";

function MyProducts({myProducts}) {

    console.log(myProducts)
    const mappedMyProducts = myProducts.map((item) => {
        // console.log(item)
        return <ProductsAccount item={item.product} />
    })

    return ( 
        <div className="my-products">
            MY PRODUCTS
            {mappedMyProducts}
        </div>
     );
}

export default MyProducts;