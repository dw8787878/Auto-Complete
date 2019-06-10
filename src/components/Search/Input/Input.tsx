import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import axios from 'axios';

//URL for API to GET suggestions
const kozicki_api_host = 'http://michaelkozicki.com/auto.php?q=';
//CORS API
const cors_api_host = 'https://cors-anywhere.herokuapp.com';

class Input extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputKeys: '',
            suggestions: []
        };
    }

    //if there is a timeout, throw an error..
    componentDidUpdate(prevProps: any, prevState: any) {
        let inputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== inputKeys) {
            let self = this;
            axios.get(`${cors_api_host}/${kozicki_api_host}${self.state.inputKeys}`)
                .then(function (response) {
                    self.setState({
                        suggestions: response.data.data
                    })
                })
                .catch(function (error) {
                    console.log("this is the error:", error.response);
                });
        }
    }

    handleOnChange(event: any) {
        this.setState({ inputKeys: event.target.value });
    }

    render() {
        return (
            <div>
                <input onChange={event => this.handleOnChange(event)} />
                <Dropdown inputEntered={this.props.selectedValue} selectMenuItem={this.props.selectMenuItem} suggestions={this.state.suggestions} result={this.props.result}/>
            </div>
        )
    }
}

export default Input
