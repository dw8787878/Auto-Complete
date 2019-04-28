import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Input extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputKeys: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event: any): void {
        console.log("this is event.target.value:", event.target.value);
        this.setState({ inputKeys: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={e => this.handleOnChange(e)} /><br />
                    
                        <Dropdown inputEntered={this.state.inputKeys} selectMenuItem={this.props.selectMenuItem} />
            
                </div>
            </div>
        );
    }
}

export default Input;
