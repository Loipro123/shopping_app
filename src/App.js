import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/Header/header.component';

function App() {
  
  return (
    <div>
      <Header/>
     <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop' component ={Shop}></Route>
     </Switch>
    </div>
  );
}

export default App;
