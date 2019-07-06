import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    OnOptionChange:  (val: string) => void;
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
                                OnOptionChange={props.OnOptionChange}
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
