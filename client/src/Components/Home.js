import { useHistory } from "react-router-dom";
import './CSS/Home.css'
import ReviewCard from "./ReviewCard";
import TopThree from "./TopThree";
function Home({homeReviews, topThree, user}) {
 const history = useHistory()
 let iconLoad = <i class="fa-solid fa-spinner fa-spin-pulse"></i>
 
 let mappedHomeReviews = homeReviews.map((review) => {
    return <div className="home-reviews">
        <div className="home-image">
            <img id="product-image" src={review.product.image}></img>
        </div>
        <ReviewCard review={review} />
        </div>
 })

 function routeMyProducts() {
    history.push('/myproducts')
    console.log('go to my products')
 }

 function routeMyRoutines() {
    history.push('/myroutines')
    console.log('go to my routines')
 }

 function routeMyWishlist() {
    history.push('/mywishlist')
    console.log('go to my wishlist')
 }

 let myTopThree = topThree.map((item) => {
    console.log(item)
    return  <div className="wishlist-div">
        <TopThree item={item.products} />
    </div>
    
 })

 console.log(topThree.length == 0)
 console.log(topThree)

//  console.log(mappedHomeReviews.length == 0)
//  console.log(homeReviews)
    return ( 
        <div className="home-div">
            <div className="right-div">
                <p> REVIEWS </p>
                {mappedHomeReviews.length == 0 ? iconLoad : mappedHomeReviews}
            </div>
            {/* <div className="center-div">
                CENTER
            </div> */}
            <div className="left-div">
                <div className="left-text">
                    <h5 className="link" onClick={routeMyProducts}>My Products</h5>
                    <h5 className="link" onClick={routeMyWishlist}>My Wishlist</h5>
                </div>
                <div className="wishlist">
                    {topThree.length == 0 ? <p>Nothing in Wishlist Yet</p> : myTopThree}
                </div>
            </div>
        </div>
     );
}

export default Home;