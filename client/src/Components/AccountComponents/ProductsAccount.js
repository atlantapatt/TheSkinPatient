function ProductsAccount({item}) {
    console.log(item)
    console.log(item.image)
    return ( 
        <div className="item-card">
            <div className="image">
                {/* <img src={item.image}></img> */}
            </div>
            <br></br>
            <div className="item-text">
                <h4>{item.name}</h4>
                <h5>{item.brand}</h5>
                <p>{item.category}</p>
            </div>
            
        </div>
     );
}

export default ProductsAccount;