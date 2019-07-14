import React, { Key } from 'react';
import {Dropdown, Word} from './Dropdown/Dropdown';
import axios from 'axios';
import './Input.css';

interface InputProps {
    OnOptionChange: (val: string) => void;
}

interface InputState {
    inputKeys: string;
    suggestions: Word[];
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
        this.HandleKeyDown = this.HandleKeyDown.bind(this);
        this.HandleOptionChange = this.HandleOptionChange.bind(this);
    }

    componentDidUpdate(prevProps: InputProps, prevState: InputState) {
        let strInputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== strInputKeys) {
            this.setState({
                suggestions: []
            })
            if (strInputKeys.length >= 4) {
                const self = this;
                axios.get(`${CorsApiHost}/${KozickiApiHost}${self.state.inputKeys}`)
                    .then(function (response) {
                        self.setState({
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

    HandleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        this.setState({
            inputKeys: event.currentTarget.value
        });
    }

    HandleOptionChange = (event: string) => {
        this.props.OnOptionChange(event);
        this.setState({
            suggestions: []
        })
    }

    render() {
        return (
            <div>
                <input className="dropDownInput" onKeyDown={this.HandleKeyDown} />
                {this.state.suggestions && (
                    <Dropdown
                        OnOptionChange={this.HandleOptionChange}
                        suggestions={this.state.suggestions}
                    />
                )
                }
            </div>
        )
    }
}

export default Input
