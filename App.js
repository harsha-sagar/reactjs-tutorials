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
                        type="number"
                        update={this.update}
                        val={this.state.red}
                        min="0"
                        max="10"
                        step="1"
                        label="lbl"/>
            </div>
        );
    }
}

class Widget extends React.Component{
    render(){
        return (
            <div>
                <input type={this.props.type}
                       onChange={this.props.update}
                       value={this.props.val}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}/>
                <h1>{this.props.label} - {this.props.val}</h1>
            </div>
        );
    }
}

Widget.propTypes = {
    min: React.Proptypes.number,
    max: React.Proptypes.number,
    step: React.Proptypes.number,
    val: React.Proptypes.number,
    label: React.Proptypes.string,
    update: React.Proptypes.func.isRequired,
    type: React.Proptypes.oneOf(['number', 'range'])
};

Widget.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
