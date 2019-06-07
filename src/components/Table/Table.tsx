import React from 'react';
import './Table.css';

interface TableProps {
    result:string;
}

interface TableState {
    result:string[];
}

class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);
        this.state = {
            result: []
        }
    }

    componentDidUpdate(prevProps: TableProps, prevState: TableState) {
        let props = this.props.result
        if (prevProps.result !== props) {
            props = JSON.parse(props);
            this.setState({
                result: [...this.state.result, ...[props]],

             }, () => {
            })
        }
    }

    render() {
        const allResults = this.state.result
        return (
            <table className="tg">
                <tbody>
                    <tr>
                        <th className='tg-0pky'>ID</th>
                        <th className='tg-0pky'>Weight</th>
                        <th className='tg-0pky'>Value</th>
                    </tr>
                    {(allResults && allResults.map((result: any) => (
                        <tr key={result.id}>
                            <td className='tg-0pk'>{result.id}</td>
                            <td className='tg-0pk'>{result.weight}</td>
                            <td className='tg-0pk'>{result.value}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
        )
    }
}
export default Table


//we do not need the history of the results.  we can rid of the state.
//this should be a dumb component
//define result.id weight and value interface

