import React, { useState } from 'react';
import './header.styles.css';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import NavItemNav from './nav_item/NavItemNav';
import { withRouter } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { useRecoilState } from 'recoil';
import { switcherThemeFamily } from '../../pages/recoil/RecoilModule';

export default React.memo(withRouter(({ primaryLinks }) => {
    const [switcher, setSwitcher] = useRecoilState(switcherThemeFamily);
    console.log('switcher', switcher)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleChange = (event) => {
        setSwitcher({ [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Navbar className="tg-padding-1" color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {(primaryLinks || []).map((link, index) => (
                            <NavItemNav key={index} link={link} />
                        ))}
                        <Switch
                            checked={switcher}
                            onChange={handleChange}
                            color="primary"
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Nav>
                </Collapse>
            </Navbar>
        </>);
}));