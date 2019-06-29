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

  const handleOptionChange = (event: any) =>{
    const Item = event.target.getAttribute('value');
    return props.onOptionChange(Item);
  }

  return (
    <li
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={handleOptionChange}
    >
      {props.word.value}
    </li>
  )
}
export default Option;
//change all the any's
