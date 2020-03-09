import React from 'react';
import {auth,createUserProtofileDocument} from '../../firebase/firebase.utils';
import FormInput from '../Form-input/formInput.component';
import CustomBtn from '../Custom-Button/customBtn.component';
import './signUp.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('The confirm password and password is not match!');
            return;
        }
        try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProtofileDocument(user,{displayName});
           this.setState({
            displayName : "",
            email: "",
            password: "",
            confirmPassword: ""
           })
        }catch(error){
            console.log(error);
        }
    }
    handleChange = (event) =>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        });
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
              <h1 className="title">I don't have an account</h1>
              <span>Sign up with your Email and Password</span>
              <form className="sign-up-form" onSubmit={this.handleSubmit}>
                 <FormInput 
                  type="text"
                  name="displayName"
                  value={displayName}
                  handleChange={this.handleChange}
                  label="Display Name"
                  required
                 ></FormInput>
                 <FormInput 
                  type="text"
                  name="email"
                  value={email}
                  handleChange={this.handleChange}
                  label="Email"
                  required
                 ></FormInput>
                 <FormInput 
                  type="password"
                  name="password"
                  value={password}
                  handleChange={this.handleChange}
                  label="PassWord"
                  required
                 ></FormInput>
                 <FormInput 
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  handleChange={this.handleChange}
                  label="Confirm Password"
                  required
                 ></FormInput>
                 <CustomBtn type="submit">SIGN UP</CustomBtn>
              </form>
            </div>
        )
    }
}

export default SignUp;
