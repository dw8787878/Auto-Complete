import React, { Component } from 'react';

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: ["apple", "banana", "orange"]
        };
        this.autoFill = this.autoFill.bind(this);
    }

    autoFill(inputKeys: string): Array<string> {

        let history = this.state.history;
        let match = history.filter(function (word: string) {
            return word.includes(inputKeys);
        })
        return match;
    }

    render() {
        let inputKeys = this.props.inputEntered;
        return (
            <div>

                {
                    this.autoFill(inputKeys).map(function (word: string) {
                        return (<option value={word}>{word}</option>)
                    })
                }

            </div>
        );
    }

}

export default Dropdown;