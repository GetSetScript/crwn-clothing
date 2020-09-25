import React, { Component } from 'react'
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                                label={"email"}
                                name={"email"}
                                type={"email"}
                                value={this.state.email}
                                required/>
                    <FormInput handleChange={this.handleChange}
                                label={"password"}
                                name={"password"}
                                type={"password"}
                                value={this.state.password}
                                required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton  isGoogleSignin={true} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn

