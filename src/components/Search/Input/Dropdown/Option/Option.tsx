import React from 'react';

const Option = (props: any) => {
  return (
    <div>
      <select id="catchpoint" onChange={props.selectMenuItem} multiple>
        {
          props.search && props.search.map(function (word: any, key: number) {
            return (
              <option key={key} value={JSON.stringify(word)}>{word.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Option;

//change selectMenuItem to onOptionChange
