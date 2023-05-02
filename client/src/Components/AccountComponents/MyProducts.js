import ProductsAccount from "./ProductsAccount";

function MyProducts({myProducts, goHome}) {


    function deleteMyProducts() {
        console.log('delete my products')
    }

    console.log(myProducts)
    const mappedMyProducts = myProducts.map((item) => {
        console.log(item)
        return <ProductsAccount onDelete={deleteMyProducts} item={item} />
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