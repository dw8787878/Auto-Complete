import React from 'react';

const Option = (props: any) => {
  return (
    <div>
      <select id="catchpoint" multiple>
        {
          props.search && props.search.map(function (word: any, key: number) {
            return (
              <option key={key} value={JSON.stringify(word)} onClick={props.onOptionChange}>{word.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Option;

// move the mapping to dropdown.tsx.
