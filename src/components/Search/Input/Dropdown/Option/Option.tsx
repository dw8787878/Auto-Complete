import React from 'react';

const Option = (props: any) => {
  return (
    <div>
      <select id="catchpoint" onChange={props.onOptionChange} multiple>
        {
          props.search && props.search.map(function (word: any, key: number) {
            return (
              <option key={key} value={JSON.stringify(word)} onClick={props.handleMouseClick}>{word.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Option;
