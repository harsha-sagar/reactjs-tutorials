import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'harsha'
                },
                {
                    id: 2,
                    name: 'sagar'
                },
                {
                    id: 3,
                    name: 'nikhil'
                },
                {
                    id: 4,
                    name: 'sudheer'
                },
                {
                    id: 5,
                    name: 'abhishek'
                }
            ]
        }
    }
    render(){
        let rows = this.state.data.map( person => {
            return <Person key={person.id} data={person}/>
        });
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

const Person = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
        </tr>
    );
}

export default App
