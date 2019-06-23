import React, { Attributes } from 'react';
import { render } from 'react-dom';
import './Search.css';
import Input from '../components/Search/Input/Input';
import Table from '../components/Table/Table';

interface Result {
  id: number;
  weight: number;
  name: string;
  value: number;
}

interface SearchContainerState {
  result: Result;
}

class SearchContainer extends React.Component<{}, SearchContainerState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      result: {
        id: 0,
        weight: 0,
        name: '',
        value: 0
      }
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(event: any) {
    this.setState({
      result: JSON.parse(event.target.getAttribute('value'))
    })
  }

  render() {
    return (
      <div>
        <Input onOptionChange={this.onOptionChange} />
        <Table result={this.state.result} />
      </div>
    );
  }
}

export default SearchContainer;
