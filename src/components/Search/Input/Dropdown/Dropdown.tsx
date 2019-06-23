import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    onOptionChange: Function;
    suggestions: string[];
}

const Dropdown = (props: DropdownProps) => {
    return (
        <div>
            <ul id="dropdown">
                {
                    props.suggestions && props.suggestions.map(function (word: any, key: number) {
                        return (
                            <Option
                                key={key}
                                word={word}
                                onOptionChange={props.onOptionChange}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Dropdown;

//Nice to have's:
//Look at Google's autocomplete.  As you hover on a drop down selction item, it gets highlighted.
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.

