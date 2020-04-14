import React from 'react';

import FormInput from '../form-input/formInput';
import Button from '../button/customButton';

import { singInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSuubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    onChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSuubmit}>
                    <FormInput name='email' type= 'email' label='email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <Button type='submit' value='Submit Form'>Sign in</Button>
                        <Button isGoogleSignIn onClick={singInWithGoogle}>Sign in with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;