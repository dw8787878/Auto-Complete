import React from 'react';
import { render } from 'react-dom';
import Search from '../components/Search/Search';
import './Search.css';
import Input from '../components/Search/Input/Input';
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
        <Input onOptionChange={this.onOptionChange} />
        <Table result={this.state.result} />
      </div>
    );
  }
}

export default SearchContainer;
