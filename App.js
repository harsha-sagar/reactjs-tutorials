import React from 'react';
import ReactDOM from 'react-dom';

/*
owner component or parent component or composite component
*/
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 'red',
            green: 'green',
            blue: 'blue',
            cat: 0
        };
        this.update = this.update.bind(this);
    }
    update(e){
        console.log(ReactDOM.findDOMNode(this.refs.red).childNodes[0].value);
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).childNodes[0].value,
            green: ReactDOM.findDOMNode(this.refs.green).childNodes[0].value,
            blue: ReactDOM.findDOMNode(this.refs.blue).childNodes[0].value
        });
    }
    render(){
        return (
            <div>
                <Widget ref="red"
                        txt={this.state.red}
                        update={this.update}/>
                <Widget ref="green"
                        txt={this.state.green}
                        update={this.update}/>
                <Widget ref="blue"
                        txt={this.state.blue}
                        update={this.update}/>
            </div>
        );
    }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text'
}

/*
child component or ownee component
*/
class Widget extends React.Component{
    render(){
        return (
            <div>
                <input type="text"
                       onChange={this.props.update} value={this.props.txt}/>
                <h1>{this.props.txt}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);
