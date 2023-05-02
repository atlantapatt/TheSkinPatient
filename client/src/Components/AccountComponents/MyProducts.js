import ProductsAccount from "./ProductsAccount";

function MyProducts({myProducts, deleteMyItems, goHome}) {

    console.log(myProducts)
    const mappedMyProducts = myProducts.map((item) => {
        console.log(item)
        return <ProductsAccount deleteMyItems={deleteMyItems} item={item.product} />
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