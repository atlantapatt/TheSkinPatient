import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Account from './Account';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/account'>
        <Account/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Routes>
  );
}

export default App;
