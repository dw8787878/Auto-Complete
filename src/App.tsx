import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Table from './Table';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 'select'
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
  }

  selectMenuItem(event: any): void{
    // event.preventDefault();
    this.setState({
      value: event.target.value
    }, () => {

      console.log(this.state.value);
      console.log(event);

    })
  }

  render() {
    return (
      <div>
        <Input selectMenuItem={this.selectMenuItem} />
        <Table />
      </div>
    );
  }
}

export default App;
