import React from 'react';

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <b>bold</b>
            </div>
        );

/*
at any given time, only one node should be returned as shown
Does not works :- return <h1>Hello world</h1><b>bold</b>
*/

/*
Does not works :-  return
                    <div>
                        <h1>Hello world</h1>
                        <b>bold</b>
                    </div>
*/

/*
Also works :-  return <div>
                        <h1>Hello world</h1>
                        <b>bold</b>
                    </div>
*/

    }
}

/*
approach 2 for creating a component
this is class component, which maintains state
*/
// class App extends React.Component{
//     render(){
//         return React.createElement('h1',null,'hello guys');
//     }
// }

/*
approach 3 for creating a component
this is functional component, which is stateless
*/
// const App = () => <h1>Hello eggheads</h1>

export default App
