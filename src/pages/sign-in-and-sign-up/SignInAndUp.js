import React from 'react';
import './SignInAndUp.styles.scss';
import SignIn from '../../components/sign-in/SignIn';

export default ({session ,router }) => {
    return (<div>
            <SignIn session={session} router ={router}/>
        </div>)
}