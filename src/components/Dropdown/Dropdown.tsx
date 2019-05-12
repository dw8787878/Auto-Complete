import React from 'react';

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

//we want to make the components as simple as possible.
//therefore, the option here can be a seperate component

//Nice to haves:
//Look at Google's autocopmlete.  As you hover on a drop down selction item, it gets highlighted.
//hint: use ul
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.

//Make component work without showDropDown prop.