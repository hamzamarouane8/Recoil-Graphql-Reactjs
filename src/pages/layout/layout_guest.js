import React from 'react';
import Header from '../../components/header/Header';
import './style/layout_guest.css';
export default ({ children }) => {

    const primaryLinks = [
        {
            path: "/shop",
            text: "Shop"
        },
        {
            path: "/login",
            text: "My account"
        }, {
            path: "/canvas",
            text: "Canvas"
        }
    ]


    return (
        <>
            <Header primaryLinks={primaryLinks} />
            <div className="child tg-wid-100 tg-hei-100">
                {children}
            </div>
        </>
    )
}