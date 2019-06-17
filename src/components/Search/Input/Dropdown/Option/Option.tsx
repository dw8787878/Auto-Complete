import React from 'react';

const Option = (props: any) => {
  return (
    <li key={props.key} value={JSON.stringify(props.word)} onClick={props.onOptionChange}>{props.word.value}</li>
  )
}

export default Option;
