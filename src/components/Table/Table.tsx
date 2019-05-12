import React from 'react';
import './Table.css';

class Table extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            results: []
        }
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        let props = this.props.results
        if (prevProps.results !== props) {
            props = JSON.parse(props);
            this.setState({ results: [...this.state.results, ...[props]] }, () => {
            })
        }
    }
    render() {
        const allResults = this.state.results
        return (
            <table className="tg">
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
            </table>
        )
    }
}
export default Table

//we do not need the history of the results.  we can rid of the state.
