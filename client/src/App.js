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
  const {user, setUser} = useContext(UserContext)
  const [reviews, setReviews] = useState([])

// useEffect(() => {
//   fetch('/me').then((response) => {
//     if (response.ok) {
//       response.json().then((user) => setUser(user))
//     } else {
//       return <Login />
//     }
//   })
// })
console.log(url)

useEffect(() => {
  fetch('/products').then((response) => {
      if (response.ok) {
          response.json().then((products) => setProducts(products))
      }
  })
},[])

  return (
    <div className='app'>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/account'>
          <Account />
        </Route>
        <Route exact path='/products'>
          <Products url={url} setUrl={setUrl} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} productName={productName} setProductName={setProductName} products={products} setProducts={setProducts}/>
        </Route>
        <Route exact path={`/${url}`}>
          <ProductPage reviews={reviews} setReviews={setReviews} url={url} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct}/>
        </Route>
        <Route exact path='/myproducts'>
          <MyProducts />
        </Route>
        <Route exact path='/myroutines'>
          <MyRoutines />
        </Route>
        <Route exact path='/mywishlist'>
          <MyWishlist/>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
