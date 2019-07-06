import React from 'react';
import './Table.css';

export interface Result {
    id: number | null;
    weight: number | null;
    value: number | null;
}

interface TableProps {
    result: Result;
}

export const Table = (props: TableProps) => {
    const Result = props.result;
    return (
        <table className="tg">
            <tbody>
                <tr>
                    <th className='tg-0pky'>ID</th>
                    <th className='tg-0pky'>Weight</th>
                    <th className='tg-0pky'>Value</th>
                </tr>
                {Result.id &&
                    <tr>
                        <td className='tg-0pk'>{Result.id}</td>
                        <td className='tg-0pk'>{Result.weight}</td>
                        <td className='tg-0pk'>{Result.value}</td>
                    </tr>
                }
            </tbody>
        </table >
    )
}
