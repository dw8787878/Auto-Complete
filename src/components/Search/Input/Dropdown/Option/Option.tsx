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

  const handleOnMouseOver = (event: any) => {
    event.target.style.color = "orange";
  }

  const handleOnMouseOut = (event: any) => {
    event.target.style.color = "black";
  }

  const handleOptionChange = (event: any) =>{
    const val = event.target.getAttribute('value');
    return props.onOptionChange(val);
  }

  return (
    <li
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={handleOptionChange}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {props.word.value}
    </li>
  )
}

export default Option;

//change all the any's
// don't use handleMouse Over/Out ; look into CSS hover.
