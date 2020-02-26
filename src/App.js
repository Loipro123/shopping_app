import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const Hats = (props)=> {
  console.log(props);
  return (
    <h1>Hats</h1>
  );
};

function App() {
  
  return (
    <div>
     <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop/hats' component ={Hats}></Route>
     </Switch>
    </div>
  );
}

export default App;
