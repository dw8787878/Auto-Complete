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
        name: undefined,
        value: undefined
      }
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(val: string) {
    this.setState({
      result: JSON.parse(val)
    })
  }

  render() {
    const Result = this.state.result;
    return (
      <div>
        <Input onOptionChange={this.onOptionChange} />
        <Table result={Result} />
      </div>
    );
  }
}

export default SearchContainer;

// change val name
// get rid of all the any;s

