import React from 'react';
import Option from './Option/Option';

const Dropdown = (props: any) => {
    return (
        <div>
            <Option search={props.suggestions} selectMenuItem={props.selectMenuItem} />
        </div>
    )
}

export default Dropdown;

//Nice to haves:
//Look at Google's autocopmlete.  As you hover on a drop down selction item, it gets highlighted.
//hint: use ul
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.

//Make component work without showDropDown prop.
