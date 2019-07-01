import React, { Key } from 'react';
import Dropdown from './Dropdown/Dropdown';
import axios from 'axios';

interface InputProps {
    onOptionChange: (val: string) => void;
}

interface InputState {
    inputKeys: string;
    suggestions: string[];
}

//URL for API to GET suggestions
const KozickiApiHost = 'http://michaelkozicki.com/auto.php?q=';
//CORS API
const CorsApiHost = 'https://cors-anywhere.herokuapp.com';

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = {
            inputKeys: '',
            suggestions: []
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidUpdate(prevProps: InputProps, prevState: InputState) {
        let strInputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== strInputKeys) {
            this.setState({
                suggestions: []
            })
            if (strInputKeys.length >= 3) {
                const Self = this;
                axios.get(`${CorsApiHost}/${KozickiApiHost}${Self.state.inputKeys}`)
                    .then(function (response) {
                        Self.setState({
                            suggestions: response.data.data
                        })
                    })
                    .catch(function (error) {
                        if (error.code === 'ECONNABORTED') {
                            throw `A timeout happend on url ${KozickiApiHost}`
                        } else {
                            throw `Axios Error: ${error.response}`;
                        }
                    });
            }
        }
    }

    handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        this.setState({
            inputKeys: event.currentTarget.value
        });
    }

    handleOptionChange = (event: any) => {
        const OnOptionChange = this.props.onOptionChange;
        if (OnOptionChange) {
            OnOptionChange(event)
        }
        this.setState({
            suggestions: []
        })
    }

    render() {
        return (
            <div>
                <input onKeyDown={this.handleKeyDown} />
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

//set up suggestions to have the different types for id, weight, and name.
//We can then do the JSON.parse here, and not in the Search container.
