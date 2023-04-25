import React, { useContext, useEffect } from 'react';
import './App.css';
import { UserContext } from './Context/UserContext'
import { Switch, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Products from './Products';

function App() {
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
          <Products/>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
