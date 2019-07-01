import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    onOptionChange:  (val: string | null) => void;
    suggestions: string[];
}

const Dropdown = (props: DropdownProps) => {
    let Suggestions = props.suggestions;
    if (Suggestions.length > 0) {
        return (
            <ul className="dropdown">
                {
                    props.suggestions.map(function (word: any, index: number) {
                        return (
                            <Option
                                key={index}
                                word={word}
                                onOptionChange={props.onOptionChange}
                            />
                        )
                    })
                }
            </ul>
        )
    }
    return null;
}

export default Dropdown;

//2nd nice have, using up down arrow be able to select item.  And press enter to select.
