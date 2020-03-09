import React from 'react';
import './App.css';
import {Route, Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInandSignUp from './pages/SignInandSignUp/SignInandSignUp.component';
import {auth, createUserProtofileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/user/user.action';
class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await createUserProtofileDocument(user);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        })
      }
      setCurrentUser(user);
    })
  }

  componentWillMount(){
    this.unsubscribeFromAuth = null;
  }
  render(){
    return (
      <div>
        <Header/>
       <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component ={Shop}></Route>
          <Route exact path='/sign' render={()=> this.props.currentUser? (<Redirect to='/'/>):(<SignInandSignUp/>)}></Route>
       </Switch>
      </div>
    );
  }
}
const mapStatetoProps = ({user}) => ({
  currentUser : user.currentState
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);
