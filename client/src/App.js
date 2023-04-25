import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
    // <Switch>
    //   <Route exact path='/' element={<Home/>} />
    //   <Route exact path='/account' element={<Account/>} />
    // </Switch>
  );
}

export default App;
