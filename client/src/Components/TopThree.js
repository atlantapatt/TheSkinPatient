import './CSS/TopThree.css'

function TopThree({item}) {
    console.log(item)
    return ( 
        <div className="top-three">
            <img src={item.image}></img>
            <h5 className='item-name'>{item.name}</h5>
        </div>
     );
}

export default TopThree;