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
const strKozickiApiHost = 'http://michaelkozicki.com/auto.php?q=';
//CORS API
const strCorsApiHost = 'https://cors-anywhere.herokuapp.com';

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = {
            inputKeys: '',
            suggestions: []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidUpdate(prevProps: InputProps, prevState: InputState) {
        let strInputKeys = this.state.inputKeys;
        if (prevState.inputKeys !== strInputKeys) {
            this.setState({
                suggestions: []
            })
            if (strInputKeys.length >= 3) {
                let self = this;
                axios.get(`${strCorsApiHost}/${strKozickiApiHost}${self.state.inputKeys}`)
                    .then(function (response) {
                        self.setState({
                            suggestions: response.data.data
                        })
                    })
                    .catch(function (error) {
                        if (error.code === 'ECONNABORTED') {
                            throw `A timeout happend on url ${strKozickiApiHost}`
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
