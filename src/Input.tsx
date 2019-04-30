import React, { Component } from 'react';
import Dropdown from './Dropdown';

const Input: React.SFC<any> = props => {
    const { message } = props
    
    return (
        <div>
             <input onChange={(e)=>props.handleOnChange(e)}></input>
             <Dropdown inputEntered={props.selectedValue} selectMenuItem={props.selectMenuItem} search={props.search} showDropDown={props.showDropDown}/>
        </div>
    )
}

export default Input