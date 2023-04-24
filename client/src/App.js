import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Account from './Account';

function App() {
  return (
    <Switch>
      <Route path='/account'>
        <Account/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
