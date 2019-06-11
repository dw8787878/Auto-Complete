import React from 'react';
import { render } from 'react-dom';
import Search from '../components/Search/Search';
import Table from '../components/Table/Table';

interface SearchContainerState {
  result: any;
}

class SearchContainer extends React.Component<{}, SearchContainerState>{
  constructor(props: any) {
    super(props);
    this.state = {
      result: ''
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(event: any) {
    this.setState({
      result: JSON.parse(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <Search onOptionChange={this.onOptionChange} />
        <Table result={this.state.result} />
      </div>
    );
  }
}

export default SearchContainer;

// we do not need Search component.  Put Input component directly in here.
// update structure of input and search.

