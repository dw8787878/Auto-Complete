import React, { Component } from 'react';
import axios from 'axios';

const Dropdown: React.SFC<any> = props => {
    const { message } = props
    if (props.showDropDown) {
        return (
            <div>
                <select id="catchpoint" onChange={props.selectMenuItem} multiple>
                    {
                        props.search && props.search.map(function (word: any) {
                            return (
                                <option value={JSON.stringify(word)}>{word.value}</option>
                            )
                        })
                    }
                </select>
            </div>

        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default Dropdown