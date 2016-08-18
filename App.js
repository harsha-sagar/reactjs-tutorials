import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <Button>I <Heart/> React</Button>
/*
children of Button component - I <Heart/> React
Heart component becomes child component of Button component
*/
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

class Button extends React.Component{
    render(){
        return (
            <button>{this.props.children}</button>
/*
accessing children of Button component
*/
        );
    }
}

const Heart = () => {
    return <span className="glyphicon glyphicon-heart"></span>
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);
