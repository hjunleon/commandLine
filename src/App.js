import React from 'react';
import logo from './logo.svg';
import './App.css';

class CmdLineStart extends React.Component{
  render(){
  return(
    <div>
      <div>React Linux: v1.0.0</div>
      <div>(c) 2020 Devandes Studios. All rights reserved.</div>
      <div>Enter a command or type "help" for help</div>
    </div>
  );
}
}
class CmdLineBody extends React.Component{
  render(){
    return(
        <div>
            <div>[user@server ~]$</div>
        </div>
    );
  }
}
//difference between react func and class?
function Presentational() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="cmdWindow">
          <CmdLineStart/ >
          <CmdLineBody/ >
        </div>
      </header>
    </div>
  );
}

export default Presentational;
