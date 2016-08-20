import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component{
    constructor(){
        super();
        this.state = {
            val: 0
        };
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({
            val: this.state.val+1
        })
    }
    render(){
        return (
            <InnerComponent update={this.update} {...this.state} {...this.props}/>
        );
    }
}
/*
This is the expected behavior of the component to be created
*/


let Button = (props) => {
    return <button onClick={props.update}>{props.txt} - {props.val}</button>
}

let Label = (props) => {
    return <label onMouseMove={props.update}>{props.txt} - {props.val}</label>
}

let ButtonMixed = Mixin(Button);
/*
Create a component on the fly, invoking Mixin arrow function. Button arrow function indicates contents of that component
ButtonMixed holds the reference of the component created
*/

let LabelMixed = Mixin(Label);
/*
Create a component on the fly, invoking Mixin arrow function. Label arrow function indicates contents of that component
LabelMixed holds the reference of the component created
*/

class App extends React.Component{
    render(){
        return (
            <div>
                <ButtonMixed txt="btn"/><hr/>
                <LabelMixed txt="label"/><hr/>
            </div>
        );
    }
}

export default App
