import React from 'react';
import SignIn from '../../components/Sign-in/sign-in.component';
import SignUp from '../../components/SignUp/signUp.component'
import './SignInandSignUp.styles.scss' ;
const SignInandSignUp = () =>{
    return (
        <div className="signIn-and-signUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInandSignUp;