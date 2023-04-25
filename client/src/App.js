import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Account from './Account';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/account' element={<Account/>} />
    </Routes>
  );
}

export default App;
