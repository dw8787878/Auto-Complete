import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Table from './Table';
import axios from 'axios';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 'select',
      inputKeys: '',
      search: [],
      showDropDown: false
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("prevState.inputKeys:", prevState.inputKeys)
    console.log("this.state.inputKeys:", this.state.inputKeys)
    let inputKeys = this.state.inputKeys;
    if (prevState.inputKeys !== inputKeys) {
      let self = this;
      axios.get(`https://cors-anywhere.herokuapp.com/http://michaelkozicki.com/auto.php?q=${self.state.inputKeys}`)
        .then(function (response) {
          console.log("this is response:", response);
          self.setState({
            search: response.data.data,
            showDropDown : true
          })
        })
        .catch(function (error) {
          console.log("this is the error:", error.response);
        });
    }
  }

  selectMenuItem(event: any): void {
    this.setState({
      value: event.target.value,
      showDropDown: false
    }, () => {
      console.log(this.state.value);
    })
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("this is event.target.value:", e.target.value);
    this.setState({ inputKeys: e.target.value });
  }

  render() {
    return (
      <div>
        <Input selectMenuItem={this.selectMenuItem} handleOnChange={this.handleOnChange} search={this.state.search} showDropDown={this.state.showDropDown}/>
        <Table />
      </div>
    );
  }
}

export default App;
