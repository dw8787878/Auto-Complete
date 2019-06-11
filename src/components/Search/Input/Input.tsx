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

    componentDidUpdate(prevProps: any, prevState: any) {
        let inputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== inputKeys) {
            if (inputKeys.length >= 3) {
                let self = this;
                axios.get(`${cors_api_host}/${kozicki_api_host}${self.state.inputKeys}`)
                    .then(function (response) {
                        self.setState({
                            suggestions: response.data.data
                        })
                    })
                    .catch(function (error) {
                        if (error.code === 'ECONNABORTED') {
                            throw `A timeout happend on url ${kozicki_api_host}`
                        } else {
                            throw `Axios Error: ${error.response}`;
                        }
                    });
            }
        }
    }

    handleOnChange(event: any) {
        this.setState({
            inputKeys: event.target.value,
            suggestions: []
        });
    }

    render() {
        return (
            <div>
                <input onChange={event => this.handleOnChange(event)} />
                <Dropdown onOptionChange={this.props.onOptionChange} suggestions={this.state.suggestions}
                />
            </div>
        )
    }
}

export default Input

//create a value field in input tag to capture value so that we can clear it when a suggestion is clicked.

//get rid of handleMouseClick, and merge with handleOnChange.

//move the show drop down logic to here from dropdown.tsx
