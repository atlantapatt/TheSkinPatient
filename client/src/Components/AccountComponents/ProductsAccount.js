function ProductsAccount({item, onDelete, setProductID}) {

    function onHover() {
        setProductID(item.id)
        console.log(item.id)
        console.log(productID)
    }
    console.log(item)
    return ( 
        <div className="item-card" onHover={onHover}>
            <div className="delete" onClick={onDelete}>
                <i class="fa-solid fa-x"></i>
            </div>
            <div className="image">
                <img src={item.image}></img>
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