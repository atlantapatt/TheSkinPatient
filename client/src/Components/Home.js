import { useHistory } from "react-router-dom";
import "./CSS/Home.css"
function Home() {
 const history = useHistory()


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
                REVIEWS
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