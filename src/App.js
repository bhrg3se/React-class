import React from 'react';
import Name,{Counter} from './components'
import Api from './ApiComponent'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
      </div>
        <Name value={"Acharya"} otherVal={23}/>
        <Counter/>
        <Api></Api>
    </div>
  );
}




export default App;
