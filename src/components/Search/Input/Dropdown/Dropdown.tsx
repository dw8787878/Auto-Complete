import React from 'react';
import Option from './Option/Option';

class Dropdown extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            showDropDown: true
        }
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    handleMouseClick(event: any) {
        this.setState({
            showDropDown: false
        })
    }

    render() {
        return (
            <div>
                {this.state.showDropDown && (
                    <Option search={this.props.suggestions} selectMenuItem={this.props.selectMenuItem} handleMouseClick={this.handleMouseClick} />
                )
                }
            </div>
        )
    }
}

export default Dropdown;

//Nice to haves:
//Look at Google's autocopmlete.  As you hover on a drop down selction item, it gets highlighted.
//hint: use ul
//
//2nd nice have, using up down arrow be able to select item.  And press enter to select.

//Make component work without showDropDown prop.
