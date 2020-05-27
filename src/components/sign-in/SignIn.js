import React, { useState } from 'react';
import { Formik } from 'formik';
import FormInput from '../form/input/FormInput';
import Button from '../button/Button';
import './signIn.styles.scss';
import { signInWithGoogle } from '../firebase/firebase.Utils';
import { useRecoilState ,} from 'recoil';
import { authenticationUser } from '../../pages/recoil/RecoilModule';
import { withRouter } from 'react-router-dom';
import * as store from '../../components/store/LocalStorage';
import UUID from '../../components/commons/uuid';


export default withRouter(({ history, session, router }) => {
    const [auth, setSession] = useRecoilState(authenticationUser());
    const login1 = (tenant, username, password) => {
        console.log('login1')
        let payload = {name: "hamza", lastName: "marouane", token: "plkettrncls12tfgj977"};
        let sessionId = UUID.create();
        store.set('session_user', JSON.stringify(payload), sessionId);
        store.set('session_id', Buffer.from(sessionId).toString('base64'));
        return Promise.resolve(payload);
    }
    const login = (credentials, tenant) => {
        console.log('login')
        return Promise.resolve({name: "hamza", lastName: "marouane", token: "plkettrncls12tfgj977"});
    }
  /*  login1(tenant, credentials.username, credentials.password).then(auth =>{
                console.log('login1')

        return auth})*/

    const controller = {
        login: (credentials) => {
            login(credentials, 'SN')
                .then((data) => login1(data))
                .then((auth) => {
                    console.log('theeeen 2',auth)
                    setSession({ authenticated: true, user: auth});
                    //router.redirect('dashboard');
                }).catch(error => {
                    console.log('error')
                })
        },
    }
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    return (<div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) =>
                controller.login(values)
            }
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="email"
                            type="email"
                            name="email"
                            handleChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <FormInput
                            label="password"
                            type="password"
                            name="password"

                            handleChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" className='sign-in-button' disabled={isSubmitting} >sumit</button>
                        <Button className='firebase-button' label="Sign in with Google" handleClick={signInWithGoogle} disabled={isSubmitting} />

                    </form>
                )}
        </Formik>
    </div>)
});