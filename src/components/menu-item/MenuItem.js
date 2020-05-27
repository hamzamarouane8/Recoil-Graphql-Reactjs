import React from 'react';
import './menuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ item, history,match }) => (
    <div className={`${item.size} menu-item`}
        onClick={() => history.push(`${match.url}${item.linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{item.title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);