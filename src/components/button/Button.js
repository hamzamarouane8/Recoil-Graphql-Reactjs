import React from 'react';
import './button.styles.scss';
import Button from '@material-ui/core/Button';

export default ({ type ,handleClick, label, disabled ,className}) => (
    <Button type={type} className={className} onClick={handleClick} disabled={disabled}>
        {label}
    </Button>);