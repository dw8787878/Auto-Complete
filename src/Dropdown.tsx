import React, { Component } from 'react';
import axios from 'axios';

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            search:  [], 
            history: [],
            response: false
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
                    search: response.data.data,
                    response: true
                })
                let history = self.state.history;
                let match = history.filter(function (word: string) {
                    return word.includes(inputKeys);
                })
            })
            .catch(function (error) {
                console.log("this is the error:", error.response);
            });
        // console.log("this is history: ", this.state.history);
        if (this.state.response){
            this.setState({
                response : false
            })
            return this.state.history
        }  else {
            return [];
        }
        }
    }

    render() {
        console.log("this is inputKeys:", this.state.search);

        return (
            <React.Fragment>
                {
                    this.state.search && this.state.search.map(function (word: any) {
                        return (
                            <option value={word.id}>{word.value}</option>
                        )
                    })
                }
            </React.Fragment>
        );
    }

}

export default Dropdown;