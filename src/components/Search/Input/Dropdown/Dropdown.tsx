import React from 'react';
import Option from './Option/Option';

interface DropdownProps {
    OnOptionChange:  (val: string) => void;
    suggestions: Word[];
}

export interface Word {
    id: number,
    value: string,
    weight: number
}

export const Dropdown = (props: DropdownProps) => {
    if (props.suggestions.length > 0) {

        return (
            <ul className="dropdown">
                {
                    props.suggestions.map(function (word: Word, index: number) {
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
