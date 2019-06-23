import React from 'react';

interface Word {
  value: string;
}

interface OptionProps {
  key : number;
  word: Word;
  onOptionChange:  any;
}

const Option = (props: OptionProps) => {
  return (
    <li
    key={props.key}
    value={JSON.stringify(props.word)}
    onClick={props.onOptionChange}
    >
    {props.word.value}
    </li>
  )
}

export default Option;
