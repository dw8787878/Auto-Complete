import React, { Key } from 'react';
import {Dropdown, IWord} from './Dropdown/Dropdown';
import axios from 'axios';
import './Input.css';

interface IInputProps {
    OnOptionChange: (val: string) => void;
}

interface IInputState {
    inputKeys: string;
    suggestions: IWord[];
}

//URL for API to GET suggestions
const KozickiApiHost = 'http://michaelkozicki.com/auto.php?q=';
//CORS API
const CorsApiHost = 'https://cors-anywhere.herokuapp.com';

class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps) {
        super(props);
        this.state = {
            inputKeys: '',
            suggestions: []
        };
        this.HandleKeyDown = this.HandleKeyDown.bind(this);
        this.HandleOptionChange = this.HandleOptionChange.bind(this);
    }

    componentDidUpdate(prevProps: IInputProps, prevState: IInputState) {
        let strInputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== strInputKeys) {
            this.setState({
                suggestions: []
            })
            if (strInputKeys.length >= 3) {
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

        let deleteKeyPressed = event.keyCode || event.charCode;
        if (deleteKeyPressed == 8 || deleteKeyPressed == 46) {
            this.setState({
                inputKeys: this.state.inputKeys.slice(0,-1)
            })
        } else {
            this.setState({
                inputKeys: this.state.inputKeys.concat(event.key)
            });
        }
    }

    HandleOptionChange = (event: string) => {
        this.props.OnOptionChange(event);
        this.setState({
            suggestions: [],
            inputKeys: ''
        })
    }

    render() {
        return (
            <div>
                <input className="dropDownInput" value={this.state.inputKeys} onKeyDown={this.HandleKeyDown} />
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
