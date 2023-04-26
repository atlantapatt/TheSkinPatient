import "./CSS/ProductCard.css"
function ProductCard({item}) {
    return ( 
        <div className="item-card">
            <div className="image">
                <img src={item.image}></img>
            </div>
            <div>
                <h4>{item.name}</h4>
                <p>{item.brand}</p>
                <p>{item.category}</p>
            </div>
            
        </div>
     );
}

export default ProductCard;