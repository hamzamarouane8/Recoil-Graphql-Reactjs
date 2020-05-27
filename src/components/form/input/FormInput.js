import React from 'react';
import './formInput.styles.scss';


export default ({ handleChange, label, onBlur, ...otherProps }) => {
    return (<div className='group'>
        <input className='form-input' onBlur={onBlur} onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value.length} ? 'shrink':''} form-input-label`}>
                    {label}
                </label>) : null}
    </div>);
}