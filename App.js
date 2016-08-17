import React from 'react';
import ReactDOM from 'react-dom';

/*
owner component or parent component or composite component
also example for class component
*/
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            txt: e.target.value
        });
    }
    render(){
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
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
also example for functional component
*/
const Widget = (props) => {
    return (
        <div>
            <input type="text"
                    onChange={props.update}/>
            <h1>{props.txt}</h1>
        </div>
    );
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);
