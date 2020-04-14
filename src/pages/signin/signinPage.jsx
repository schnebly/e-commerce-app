import React from 'react';

import './signinPage.styles.scss';

import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/sign-up';

const SignInPage = () => (
    <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInPage;