import React from 'react';
import './Table.css';

interface TableProps {
    result: string;
}

interface TableState {
    result: any;
}

class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);
        this.state = {
            result: ''
        }
    }

    componentDidUpdate(prevProps: TableProps, prevState: TableState) {
        let props = this.props.result
        if (prevProps.result !== props) {
            props = JSON.parse(props);
            this.setState({
                result: props
            })
        }
    }

    render() {
        const result = this.state.result
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
}
export default Table



//define result.id weight and value interface

