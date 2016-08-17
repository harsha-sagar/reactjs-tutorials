import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
/*
1st way of utilizing properties passed to the component
*/
    // render(){
    //     return <h1>{this.props.txt}</h1>;
    // }

/*
2nd way of utilizing properties passed to the component
*/
    render(){
        let txt = this.props.txt;
        return <h1>{txt}</h1>;
    }

}

/*
specifying constraints on the properties being passed to the component
*/
App.propTypes = {
  txt: React.PropTypes.string,
/*
indicates txt property received, should be string
*/

  cat: React.PropTypes.number.isRequired
/*
indicates cat property received, should be number & should be passed to the component
*/
};

App.defaultProps = {
    txt: 'this is the default text'
}

/*
overiding default property value
*/
// ReactDOM.render(
//     <App cat={5} txt="this is the props text"/>,
//     document.getElementById('app')
// );

/*
working default property value
*/
ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);
