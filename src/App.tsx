import React from 'react';
import './App.css';
import Input from './Input';
import Table from './Table';
import axios from 'axios';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      inputKeys: '',
      search: [],
      showDropDown: false
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    //console.log("prevState.inputKeys:", prevState.inputKeys)
    //console.log("this.state.inputKeys:", this.state.inputKeys)
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
        <Table results={this.state.value}/>
      </div>
    );
  }
}

export default App;


//App should be as generic as possible
//Create a new container folder, and create a new container file.
//Have Container as a wrap around App.

//Create another folder called Components which will be a sibling of Container

//rename search state to suggestion list.  better clear name.

//Look at tslint and typescript.  Run tslint.

//For the query, store Michael's url in an env variable.