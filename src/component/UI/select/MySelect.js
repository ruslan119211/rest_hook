import React from 'react'
import classes from './MySelect.module.css'
import PostItem from "../../PostItem";

const MySelect =({options,defaultValue, value, onChange})=>{
    return(
        <select className={classes.select} value={value} onChange={e => onChange(e.target.value)}>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option=>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect
