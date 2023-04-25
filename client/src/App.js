import React, { useContext } from 'react';
import './App.css';
import { UserContext } from './Context/UserContext'
import { Switch, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';

function App() {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/account'>
          <Account />
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
