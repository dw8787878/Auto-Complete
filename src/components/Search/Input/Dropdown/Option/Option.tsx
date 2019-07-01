import React from 'react';

interface Word {
  value: string;
}

interface OptionProps {
  key: number;
  word: Word;
  onOptionChange: (val: string | null) => void;
}

const Option = (props: OptionProps) => {

  const HandleOptionChange = (event: React.MouseEvent<HTMLLIElement>) => {
    return props.onOptionChange(event.currentTarget.getAttribute('value'));
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
