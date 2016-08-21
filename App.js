import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 0,
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).childNodes[0].value,
        });
    }
    render(){
        return (
            <div>
                <Widget ref="red"
                        val={this.state.red}
                        update={this.update}/>
            </div>
        );
    }
}

class Widget extends React.Component{
    render(){
        return (
            <div>
                <input type="text"
                       onChange={this.props.update} value={this.props.val}/>
                <h1>{this.props.val}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
