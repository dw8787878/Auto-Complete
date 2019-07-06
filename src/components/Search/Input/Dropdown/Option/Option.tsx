import React from 'react';

interface OptionProps {
  key: number;
  word: any;
  onOptionChange: (val: string) => void;
}

const Option = (props: OptionProps) => {
  const handleOptionChange = (event: React.MouseEvent<HTMLLIElement>) => {
    let optionValue = event.currentTarget.getAttribute('value');
    if (optionValue !== null) {
      return props.onOptionChange(optionValue as string);
    }
  }

  return (
    <li
      id="dropDownItem"
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={handleOptionChange}
    >
      {props.word.value}
    </li>
  )
}
export default Option;
