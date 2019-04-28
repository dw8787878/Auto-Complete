import React, { Component } from 'react';
import axios from 'axios';

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: ["apple", "banana", "orange"]
        };
        this.autoFill = this.autoFill.bind(this);
    }

    autoFill(inputKeys: string): Array<string> {
        let self = this;
        axios.get(`https://cors-anywhere.herokuapp.com/http://michaelkozicki.com/auto.php?q=${inputKeys}`)
            .then(function (response) {
                console.log("this is response:",response);
                self.setState({
                    history : response.data.data
                })
              
            })
            .catch(function (error) {
                console.log("this is the error:", error.response);
            });
            console.log("this is history: ", this.state.history);
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