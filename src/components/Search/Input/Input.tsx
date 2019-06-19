import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import axios from 'axios';

interface InputProps {
    onOptionChange: Function;
  }

  interface InputState {
    inputKeys: string;
    suggestions: string[];
  }

//URL for API to GET suggestions
const kozicki_api_host = 'http://michaelkozicki.com/auto.php?q=';
//CORS API
const cors_api_host = 'https://cors-anywhere.herokuapp.com';

class Input extends React.Component<InputProps, InputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputKeys: '',
            suggestions: []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
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

    handleOnChange = (event: any) => {
        this.setState({
            inputKeys: event.target.value
        });
    }

    handleOptionChange = (event: any) => {
        const onOptionChange = this.props.onOptionChange;

        if (onOptionChange) {
            onOptionChange(event)
        }
        this.setState({
            suggestions: []
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleOnChange} />
                {this.state.suggestions && (
                    <Dropdown
                        onOptionChange={this.handleOptionChange}
                        suggestions={this.state.suggestions}
                    />
                )
                }
            </div>
        )
    }
}

export default Input


