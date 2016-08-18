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
        this.setState({
            val: this.state.val += 1
        });
    }
    componentWillMount(){
        console.log('mounting');
    }
/*
componentWillMount is a component's lifecycle method
will be invoked only once
will be invoked before render method
*/

    render(){
        console.log('rendering');
        return (
            <button onClick={this.update}>{this.state.val}</button>
        );
    }
/*
render is a component's lifecycle method
will be invoked multiple times as long as component's state properties are updated
will be invoked after componentWillMount method
*/

    componentDidMount(){
        console.log('mounted');
    }
/*
componentWillMount is a component's lifecycle method
will be invoked only once
will be invoked after render method
*/

    componentWillUnmount(){
        console.log('unmount');
    }
/*
componentWillUnmount is a component's lifecycle method
will be invoked only once
will be invoked just before the destruction of component
*/

}

class Wrapper extends React.Component{
    constructor(){
        super();
    }
    mount(){
        ReactDOM.render(<App/>, document.getElementById('a'));
/*
Attaching a component
*/
    }

    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
/*
Removing a component
*/
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
