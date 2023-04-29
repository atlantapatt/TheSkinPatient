import { useHistory } from "react-router-dom";
import "./CSS/Home.css"
import ReviewCard from "./ReviewCard";
function Home({homeReviews, setHomeReviews}) {
 const history = useHistory()

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
    return ( 
        <div className="home-div">
            <div className="right-div">
                
            </div>
            {/* <div className="center-div">
                CENTER
            </div> */}
            <div className="left-div">
                <div className="left-text">
                    <h5 className="link" onClick={routeMyProducts}>My Products</h5>
                    <h5 className="link" onClick={routeMyRoutines}>My Routines</h5>
                    <h5 className="link" onClick={routeMyWishlist}>My Wishlist</h5>
                </div>
                <div className="wishlist">
                    WishList Pics
                </div>
            </div>
        </div>
     );
}

export default Home;