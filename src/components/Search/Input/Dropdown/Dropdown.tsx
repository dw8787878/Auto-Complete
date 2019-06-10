import React from 'react';
import Option from './Option/Option';

const Dropdown = (props: any) => {
    return (
        <div>
            {props.showDropDown && (
                <Option search={props.suggestions} onOptionChange={props.onOptionChange} handleMouseClick={props.handleMouseClick} />
            )
            }
        </div>
    )
}

export default Dropdown;

//Nice to haves:
//Look at Google's autocopmlete.  As you hover on a drop down selction item, it gets highlighted.
//hint: use ul
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.
