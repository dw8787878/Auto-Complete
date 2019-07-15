import React from 'react';
import Option from './Option/Option';
import './Dropdown.css';

interface IDropdownProps {
    OnOptionChange:  (val: string) => void;
    suggestions: IWord[];
}

export interface IWord {
    id: number,
    value: string,
    weight: number
}

export const Dropdown = (props: IDropdownProps) => {
    if (props.suggestions.length > 0) {

        return (
            <ul className="dropdown">
                {
                    props.suggestions.map(function (suggestion: IWord, index: number) {
                        return (
                            <Option
                                key={index}
                                word={suggestion}
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
