import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form-input/formInput.component';
import CustomBtn from '../Custom-Button/customBtn.component';
import {auth,signInwithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: ""
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
           await auth.signInWithEmailAndPassword(email,password);
           this.setState({
               email:"",
               password:""
           })
        }catch(error){
             console.log(error);
        }
    }
    handleOnchange = event =>{
        const {value,name} = event.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div className="sign-in">
               <h1>I already have an account</h1>
               <span>Sign In with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                  <FormInput name="email" value={this.state.email} handleChange={this.handleOnchange} type="email" required label='email'></FormInput>
                  <FormInput name="password" value={this.state.password} handleChange={this.handleOnchange} type="password" required label='password'></FormInput>
                  <div className="buttons">
                     <CustomBtn type="submit">Submit</CustomBtn>
                     <CustomBtn onClick={signInwithGoogle} isGoogleSignIn>Sign In with Google</CustomBtn>
                  </div>
               </form>
            </div>
        )
    }
}

export default SignIn;