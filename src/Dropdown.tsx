import React, { Component } from 'react';
import axios from 'axios';

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            search: []
        };
    }

    componentDidUpdate(prevProps: any) {
        const inputKeys = this.props.inputEntered
        if (prevProps.inputEntered !== inputKeys) {
            let self = this;
            axios.get(`https://cors-anywhere.herokuapp.com/http://michaelkozicki.com/auto.php?q=${inputKeys}`)
                .then(function (response) {
                    console.log("this is response:", response);
                    self.setState({
                        search: response.data.data
                    })
                })
                .catch(function (error) {
                    console.log("this is the error:", error.response);
                });
        }
    }

    render() {
        console.log("this is inputKeys:", this.state.search);

        return (
            <React.Fragment>
                <select id="catchpoint" onChange={this.props.selectMenuItem}>
                    {
                        this.state.search && this.state.search.map(function (word: any) {
                            return (
                                
                                <option value={JSON.stringify(word)}>{word.value}</option>

                            )
                        })
                    }
                </select>
            </React.Fragment>
        );
    }

}

export default Dropdown;