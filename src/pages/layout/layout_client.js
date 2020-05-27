import React from 'react';
import { useRecoilState } from 'recoil';
import Header from '../../components/header/Header';
import { authenticationUser } from '../../pages/recoil/RecoilModule';
import * as store from '../../components/store/LocalStorage';

export default ({ children }) => {

    const [auth, setSession] = useRecoilState(authenticationUser());
    
    console.log('layout', auth);

    const list = [{
        name: "First Rectangle"
    },
    { name: "Second Rectangle" }
    ];

    const primaryLinks = [
        {
            path: "/dashboard",
            text: "Dashboard"
        },
        {
            path: "/products",
            text: "My products"
        }, {
            imgFlag: true,
            onClick: () => {
                store.remove('session_user');
                store.remove('session_id');
                return setSession({ ...auth, authenticated: false, user: null });
            },
            text: 'Log-out'
        }
    ]
    return (
        <>
            <Header primaryLinks={primaryLinks} />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    sideBare client gooes here ...
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}