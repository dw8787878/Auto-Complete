import React from 'react';
import { IWord } from '../Dropdown'
import './Option.css';

interface IOptionProps {
  key: number;
  word: IWord;
  OnOptionChange: (val: string) => void;
}

const Option = (props: IOptionProps) => {
  const HandleOptionChange = (event: React.MouseEvent<HTMLLIElement>) => {
    let optionValue = event.currentTarget.getAttribute('value');
    if (optionValue !== null) {
    //  console.log("props.OnOptionChange:", props.OnOptionChange)
      return props.OnOptionChange(optionValue as string);
    }
  }

  return (
    <li
      id="optionRow"
      key={props.key}
      value={JSON.stringify(props.word)}
      onClick={HandleOptionChange}
    ><div id="optionFont">
        {props.word.value}
      </div>
    </li>
  )
}
export default Option;
