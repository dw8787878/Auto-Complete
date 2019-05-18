import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Input = (props: any) => {
    const { message } = props

    return (
        <div>
             <input onChange={(e)=>props.handleOnChange(e)}></input>
             <Dropdown inputEntered={props.selectedValue} selectMenuItem={props.selectMenuItem} search={props.search} showDropDown={props.showDropDown}/>
        </div>
    )
}

export default Input
