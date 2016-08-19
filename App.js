import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            val: 0
        };
        this.update = this.update.bind(this);
    }
    update(){
        ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('a'));
    }
    componentWillMount(){
        console.log('mounting');
        console.log('props.val', this.props.val);
    }
    render(){
        console.log('rendering');
        console.log('props.val', this.props.val);
        return (
            <button onClick={this.update}>{this.state.val}</button>
        );
    }
    componentDidMount(){
        console.log('mounted');
        console.log('props.val', this.props.val);
        this.inc = setInterval(this.update, 500);
    }
    componentWillReceiveProps(nextProps){
        console.log('received props', nextProps);
        console.log('props.val', this.props.val);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('should component update?', nextProps);
        console.log('props.val', this.props.val);
        return true;
/*
return true will execute render & componentDidUpdate methods
return false will skip execution of render & componentDidUpdate methods
*/
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps);
        console.log('props.val', this.props.val);
    }
    componentWillUnmount(){
        console.log('unmount');
        console.log('props.val', this.props.val);
        clearInterval(this.inc);
    }
}

/*
lifecycle explaination -
initially when a component is about to rendered on the DOM, react checks whether component already exists/mounted or not
case 1 - if the component does not exists (i.e. not mounted)
a. executes componentWillMount method where mounting takes place
b. executes render method where actual rendering of component in the DOM takes place
c. executes componentDidMount method after rendering

case 2 - if the component already exists (i.e. already mounted)
a. does not touches/executes componentWillMount & componentDidMount methods
b. executes componentWillReceiveProps method
c. executes shouldComponentUpdate method. This is the method where we can decide whether to update/re-render the compoenent or not.
   If the method returns true then render & componentDidUpdate methods are executed, hence component is said to be re-rendered/updated
   If the method returns false then render & componentDidUpdate methods are not executed, hence no updating action for component
*/

App.defaultProps = {
    val: 0
}

class Wrapper extends React.Component{
    constructor(){
        super();
    }
    mount(){
        ReactDOM.render(<App/>, document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

// export default App
export default Wrapper
