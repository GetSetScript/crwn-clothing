import React from 'react';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';
import { authenticationService } from '../../services/user/authentication/authenticationProvider';

import './SignUp.scss';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords dont match");
            return;
        }

        try {
            authenticationService.createAuthUserWithEmailAndPassword(email, password)

            this.setState({
                email: '',
                password: '',
                confirmPassword: '' 
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='email' 
                                name='email' 
                                value={this.state.email}
                                onChange={this.handleChange}
                                label='Email'
                                required />
                    <FormInput type='password' 
                                name='password' 
                                value={this.state.password}
                                onChange={this.handleChange}
                                label='Password'
                                required />
                    <FormInput type='password' 
                                name='confirmPassword' 
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                label='Confirm Password'
                                required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }    
}

export default SignUp
