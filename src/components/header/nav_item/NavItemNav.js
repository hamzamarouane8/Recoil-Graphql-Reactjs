import React from 'react';

import {
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default ({ link }) => {

    return (<NavItem>
        {link.imgFlag ? <NavItemImg item={link} /> : <NavLink className="tg-font-s-125" to={link.path}>{link.text}</NavLink>}
    </NavItem>)
};

export const NavItemImg = ({item})=>(
<a href="#" onClick={item.onClick}>
        {item.img && <img className="img" src={item.img} alt=""/>}
        <span>{item.text}</span>
      </a>
)
