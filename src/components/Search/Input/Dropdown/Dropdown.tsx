import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    onOptionChange: Function;
    suggestions: string[];
}

const Dropdown = (props: DropdownProps) => {
    console.log('this is props.suggestions:', props.suggestions)
    return (

            <ul className="dropdown">
                {
                    props.suggestions && props.suggestions.map(function (word: any, index: number) {
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

export default Dropdown;

//2nd nice have, using up down arrow be able to select item.  And press enter to select.
