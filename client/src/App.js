import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { UserContext } from './Context/UserContext'
import { Switch, Route } from 'react-router-dom';
import Account from './Components/Account';
import Home from './Components/Home';
import Navbar from './Navbar';
import Login from './Components/Login';
import Products from './Components/Products';
import ProductCard from './Components/ProductCard';
import ProductPage from './Components/ProductPage';
import MyProducts from './Components/AccountComponents/MyProducts';
import MyRoutines from './Components/AccountComponents/MyRoutines';
import MyWishlist from './Components/AccountComponents/MyWishlist';

function App() {
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState('')
  const [url, setUrl] = useState('')
  const [currentProduct, setCurrentProduct] = useState([])
  const [reviews, setReviews] = useState([])
  const [homeReviews, setHomeReviews] = useState([])
  const [myWishlist, setMyWishlist] = useState([])
  const [myProducts, setMyProducts] = useState([])
  const [wishlistId, setWishlistId] = useState([])
  const [topThree, setTopThree] = useState([])
  const {user, setUser} = useContext(UserContext)


  let userId

  if (user !== null) {
    userId = user.id
  }
  console.log(topThree)

  useEffect(() => {
    setTopThree(myWishlist.slice(-3))
  },[])

useEffect(() => {
  fetch('/me').then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user))
    } else {
      return <Login user={user} setUser={setUser} />
    }
  })
},[])


useEffect(() => {
  fetch('/products').then((response) => {
      if (response.ok) {
          response.json().then((products) => setProducts(products))
      }
  })
},[])

useEffect(() => {
  fetch('/reviews').then((response) => {
      if (response.ok) {
          response.json().then((reviews) => setHomeReviews(reviews))
      }
  })
},[])

console.log(homeReviews)

useEffect(() => {
  fetch(`/my_products/${userId}`).then((response) => {
      if (response.ok) {
          response.json().then((product) => setMyProducts(product))
      }
  })
},[])
console.log(myProducts)
useEffect(() => {
    fetch(`/wishlists/${userId}`).then((response) => {
      if (response.ok) {
          response.json().then((wishlist) => setWishlistId(wishlist))
      }
  })
},[])


console.log(myWishlist)

useEffect(() => {
    fetch(`/product_wishlists/${userId}`).then((response) => {
      if (response.ok) {
          response.json().then((products) => setMyWishlist(products))
      }
  })
},[])

// useEffect(() => {
//   if (user == !null) {
//     fetch('/recentWishlist').then((response) => {
//       if (response.ok) {
//           response.json().then((products) => console.log(products))
//       }
//   }) 
//   }
// },[])


function addReviews(review) {
  setReviews([...reviews, review])
}

function addToWishlist(item) {
  setMyWishlist([...myWishlist, item])
}

function addToMyProducts(item) {
  setMyProducts([...myProducts, item])
}
// console.log(myProducts)
// console.log(myWishlist)
//   console.log(wishlistId.id)



if (!user) return <Login user={user} setUser={setUser} />

  return (
    <div className='app'>
      <Navbar setUser={setUser}/>
      <Switch>
        <Route exact path='/'>
          <Home user={user} homeReviews={homeReviews} setHomeReviews={setHomeReviews}/>
        </Route>
        <Route exact path='/account'>
          <Account setUser={setUser} user={user}/>
        </Route>
        <Route exact path='/products'>
          <Products url={url} setUrl={setUrl} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} productName={productName} setProductName={setProductName} products={products} setProducts={setProducts}/>
        </Route>
        <Route exact path={`/${url}`}>
          <ProductPage addReviews={addReviews} user={user} addToMyProducts={addToMyProducts} wishlistId={wishlistId} setWishlistId={setWishlistId} addToWishlist={addToWishlist} reviews={reviews} setReviews={setReviews} url={url} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct}/>
        </Route>
        <Route exact path='/myproducts'>
          <MyProducts myProducts={myProducts}/>
        </Route>
        <Route exact path='/myroutines'>
          <MyRoutines />
        </Route>
        <Route exact path='/mywishlist'>
          <MyWishlist url={url} setUrl={setUrl} myWishlist={myWishlist} setMyWishlist={setMyWishlist} wishlistId={wishlistId} setWishlistId={setWishlistId} user={user}/>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
