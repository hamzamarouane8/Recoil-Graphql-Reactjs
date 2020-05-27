import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

export default () => {

    const [data, setData] = useState({
        sections: [{
            title: 'hats',
            linkUrl:'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            title: 'jackets',
            linkUrl:'',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            title: 'sneakers',
            linkUrl:'',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            title: 'womens',
            linkUrl:'',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size:'large'
        },
        {
            title: 'mens',
            linkUrl:'',
            imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
            size:'large'
        },
        ]
    }
    )
    return (<div className='directory-menu'>
        {
            (data.sections || []).map((item, index) => (
                <MenuItem key={index} item={item} />
            ))
        }
    </div>)
}