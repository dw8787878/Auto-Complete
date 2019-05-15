import React from 'react';
import './Search.css';
import Input from '../Input/Input';
import Table from '../Table/Table';
import axios from 'axios';

//URL for API to GET suggestions
const kozicki_api_host = 'http://michaelkozicki.com/auto.php?q=';
//CORS api
const cors_api_host = 'https://cors-anywhere.herokuapp.com';

class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      inputKeys: '',
      suggestions: [],
      showDropDown: false
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    let inputKeys = this.state.inputKeys;
    if (prevState.inputKeys !== inputKeys) {
      let self = this;
      //console.log(`http://michaelkozicki.com/auto.php?q=${self.state.inputKeys}`);
      axios.get(`${cors_api_host}/${kozicki_api_host}${self.state.inputKeys}`)
        .then(function (response) {
          self.setState({
            suggestions: response.data.data,
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
    })
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("this is event.target.value:", e.target.value);
    this.setState({ inputKeys: e.target.value });
  }

  render() {
    return (
      <div>
        <Input selectMenuItem={this.selectMenuItem} handleOnChange={this.handleOnChange} search={this.state.suggestions} showDropDown={this.state.showDropDown}/>
        <Table results={this.state.value}/>
      </div>
    );
  }
}

export default Search;


//Look at tslint and typescript.  Run tslint.
//For the query, store Michael's url in an env variable.
