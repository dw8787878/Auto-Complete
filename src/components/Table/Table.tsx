import React from 'react';
import './Table.css';

export interface IResult {
    id?: number;
    weight?: number;
    value?: number;
}

interface ITableProps {
    result: IResult;
}

export const Table = (props: ITableProps) => {
    const result = props.result;
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th><div id="font-th">ID</div></th>
                    <th><div id="font-th">Weight</div></th>
                    <th><div id="font-th">Value</div></th>
                </tr>
                <tr>
                    <td><div id="font-td">{result.id}</div></td>
                    <td><div id="font-td">{result.weight}</div></td>
                    <td><div id="font-td">{result.value}</div></td>
                </tr>
            </tbody>
        </table >
    )
}
