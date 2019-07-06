import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    onOptionChange:  (val: string) => void;
    suggestions: string[];
}

const Dropdown = (props: DropdownProps) => {
    if (props.suggestions.length > 0) {
        return (
            <ul className="dropdown">
                {
                    props.suggestions.map(function (word: string, index: number) {
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
