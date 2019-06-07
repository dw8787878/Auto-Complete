import React, { ChangeEvent } from 'react';
import './Search.css';
import Input from './Input/Input';

const Search = (props: any) => {

  return (
    <div>
      <Input selectMenuItem={props.selectMenuItem} />
    </div>
  )

}

export default Search;

//get rid of any for typescript

//only call the api after 3 characters have been entered.

//Another folder, create a folder named Containers and it should be a sibling to components.  Create another parent file that will have Table.tsx, and Search.tsx.
