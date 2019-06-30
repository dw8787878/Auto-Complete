import React from 'react';

interface Word {
  value: string;
}

interface OptionProps {
  key: number;
  word: Word;
  onOptionChange: any;
}

const Option = (props: OptionProps) => {

  const HandleOptionChange = (event: any) =>{
    return props.onOptionChange(event.target.getAttribute('value'));
  }

  return (
    <li
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={HandleOptionChange}
    >
      {props.word.value}
    </li>
  )
}
export default Option;
//change all the any's
