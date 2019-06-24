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

  let handleOnMouseOver = (event: any) => {
    event.target.style.color = "orange";
  }

  let handleOnMouseOut = (event: any) => {
    event.target.style.color = "black";
  }

  return (
    <li
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={props.onOptionChange}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {props.word.value}
    </li>
  )
}

export default Option;
