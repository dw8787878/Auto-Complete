import React, { Attributes } from 'react';
import { render } from 'react-dom';
import './Search.css';
import Input from '../components/Search/Input/Input';
import { Result, Table } from '../components/Table/Table';

interface SearchContainerState {
  result: Result;
}

class SearchContainer extends React.Component<{}, SearchContainerState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      result: {
        id: null,
        weight: null,
        value: null
      }
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(result: string) {
    this.setState({
      result: JSON.parse(result)
    })
  }

  render() {
    const result = this.state.result;
    return (
      <div>
        <Input onOptionChange={this.onOptionChange} />
        <Table result={result} />
      </div>
    );
  }
}

export default SearchContainer;
