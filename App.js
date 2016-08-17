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

export default App
