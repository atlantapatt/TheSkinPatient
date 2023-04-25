import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Account from './Account';
import Home from './Home';

function App() {
  return (
    <div>
      HELLO APP
    </div>
    // <Routes>
    //   <Route exact path='/' element={<Home/>} />
    //   <Route exact path='/account' element={<Account/>} />
    // </Routes>
  );
}

export default App;
