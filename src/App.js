import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInandSignUp from './pages/SignInandSignUp/SignInandSignUp.component';
import {auth, createUserProtofileDocument} from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await createUserProtofileDocument(user);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({
        currentUser:user
      })
    })
  }

  componentWillMount(){
    this.unsubscribeFromAuth = null;
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
       <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component ={Shop}></Route>
          <Route exact path='/sign' component ={SignInandSignUp}></Route>
       </Switch>
      </div>
    );
  }
}

export default App;
