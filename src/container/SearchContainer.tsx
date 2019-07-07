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
        id: undefined,
        weight: undefined,
        value: undefined
      }
    };
    this.OnOptionChange = this.OnOptionChange.bind(this);
  }

  OnOptionChange(result: string) {
    this.setState({
      result: JSON.parse(result)
    })
  }

  render() {
    const result = this.state.result;
    return (
      <div>
        <Input OnOptionChange={this.OnOptionChange} />
        <Table result={result} />
      </div>
    );
  }
}

export default SearchContainer;
