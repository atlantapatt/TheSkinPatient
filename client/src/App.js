import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Account from './Account';

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
