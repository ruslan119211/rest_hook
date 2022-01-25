import React from 'react';
import classes from './MyInput.module.scss'

const MyInput = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} className={classes.input} {...props}/>
    );

})

export default MyInput;
