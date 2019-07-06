import React from 'react';

interface OptionProps {
  key: number;
  word: any;
  OnOptionChange: (val: string) => void;
}

const Option = (props: OptionProps) => {
  const HandleOptionChange = (event: React.MouseEvent<HTMLLIElement>) => {
    let optionValue = event.currentTarget.getAttribute('value');
    if (optionValue !== null) {
      return props.OnOptionChange(optionValue as string);
    }
  }

  return (
    <li
      id="dropDownItem"
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={HandleOptionChange}
    >
      {props.word.value}
    </li>
  )
}
export default Option;
