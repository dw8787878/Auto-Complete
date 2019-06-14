import React from 'react';

const Option = (props: any) => {
  return (
    <option key={props.key} value={JSON.stringify(props.word)} onClick={props.onOptionChange}>{props.word.value}</option>
  )
}

export default Option;

