import React, { ChangeEvent } from 'react';
import './Search.css';
import Input from './Input/Input';

const Search = (props: any) => {
  return (
    <div>
      <Input onOptionChange={props.onOptionChange} result={props.result}/>
    </div>
  )
}

export default Search;

//get rid of any for typescript

