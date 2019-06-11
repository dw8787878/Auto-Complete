import React from 'react';
import './Table.css';

interface Result {
    id: number;
    weight: number;
    name: string;
    value: number;
}

interface TableProps {
    result: Result;
}

const Table = (props: TableProps) => {

    const result = props.result;
    return (
        <table className="tg">
            <tbody>
                <tr>
                    <th className='tg-0pky'>ID</th>
                    <th className='tg-0pky'>Weight</th>
                    <th className='tg-0pky'>Value</th>
                </tr>
                <tr>
                    <td className='tg-0pk'>{result.id}</td>
                    <td className='tg-0pk'>{result.weight}</td>
                    <td className='tg-0pk'>{result.value}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default Table

//define result.id weight and value interface
