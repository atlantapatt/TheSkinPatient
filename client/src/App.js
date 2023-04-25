import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { UserContext } from './Context/UserContext'
import { Switch, Route } from 'react-router-dom';
import Account from './Components/Account';
import Home from './Components/Home';
import Navbar from './Navbar';
import Login from './Components/Login';
import Products from './Components/Products';

function App() {
  const [products, setProducts] = useState([])
  const {user, setUser} = useContext(UserContext)

// useEffect(() => {
//   fetch('/me').then((response) => {
//     if (response.ok) {
//       response.json().then((user) => setUser(user))
//     } else {
//       return <Login />
//     }
//   })
// })

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/account'>
          <Account />
        </Route>
        <Route exact path='/products'>
          <Products products={products} setProducts={setProducts}/>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
