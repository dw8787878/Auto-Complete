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
      result: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search onOptionChange={this.onOptionChange} result={this.state.result} />
        <Table result={this.state.result} />
      </div>
    );
  }
}

export default SearchContainer;
