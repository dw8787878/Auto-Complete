import React from 'react';
import { render } from 'react-dom';
import Search from '../components/Search/Search';
import Table from '../components/Table/Table';
import axios from 'axios';

interface SearchContainerState {
  result: any;
}

class SearchContainer extends React.Component<{}, SearchContainerState>{
  constructor(props: any) {
    super(props);
    this.state = {
      result: ''
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
  }

  selectMenuItem(event: any) {
    this.setState({
      result: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search selectMenuItem={this.selectMenuItem} result={this.state.result}/>
        <Table result={this.state.result} />
      </div>
    );
  }

}

export default SearchContainer;
