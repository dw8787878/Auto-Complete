import React from 'react';

const Option = (props: any) => {
  return (
    <div>
      <select id="catchpoint" onChange={props.selectMenuItem} multiple>
        {
          props.search && props.search.map(function (word: any) {
            return (
              <option value={JSON.stringify(word)}>{word.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Option;
