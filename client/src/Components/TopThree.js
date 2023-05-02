import './CSS/TopThree.css'

function TopThree({item}) {
    console.log(item)
    return ( 
        <div id='wishlistID' className="top-three">
            <img src={item.image}></img>
            <p>{item.name}</p>
            
        </div>
     );
}

export default TopThree;