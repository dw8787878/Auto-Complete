import React from 'react';
import Option from './Option/Option';

const Dropdown = (props: any) => {
    return (
        <div>
            <select id="dropdown" onChange={props.onOptionChange} multiple>
                {
                    props.suggestions && props.suggestions.map(function (word: any, key: number) {
                        return (
                            <Option key={key} word={word} onOptionChange={props.onOptionChange}/>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown;

//Nice to haves:
//Look at Google's autocpmplete.  As you hover on a drop down selction item, it gets highlighted.
//hint: use ul
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.

//Refactor - don't use Select / Option, use UL / LI  if we can't use 1 click event
