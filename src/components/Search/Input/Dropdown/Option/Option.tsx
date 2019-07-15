import React from 'react';
import { IWord } from '../Dropdown'

interface IOptionProps {
  key: number;
  word: IWord;
  OnOptionChange: (val: string) => void;
}

const Option = (props: IOptionProps) => {
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
