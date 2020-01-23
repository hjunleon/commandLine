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
class CmdItem extends React.Component{
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleUnfocus = this.handleUnfocus.bind(this)
  }
  handleChange(event) {
    this.setState({
      cmdSoFar: event.target.value
    });
  } // if not focused on input, then pressing enter would cause it refocus
  handleFocus(){
    this.props.toFocus();
    // toggle the cursor blinking based on this state
  }
  handleUnfocus(){
    this.props.toUnfocus();
  }
  render(){
    return(
          <div>[user@server ~]$
            <input value = {this.props.cmdSoFar} onChange = {this.handleChange} onfocus = {this.handleFocus} onfocusout = {this.handleUnfocus} />
          </div>
    );
  }
}
class CmdLineBody extends React.Component{
  render(){
    return(
        <div>
            <CmdItem />
        </div>
    );
  }
}
//difference between react func and class?
function Presentational() {

  constructor(props) {
    super(props)
    this.onEnter = this.onEnter.bind(this)
  }
  onEnter(event) {
    if(e.keyCode == 13){
      /*this.setState({
        cmdSoFar: event.target.value
      });*/
      if(this.state.isFocused == true){

      } else {
        /*
        this.setState({
          isFocused: true
        });*/
      }
    }

  } // if not focused on input, then pressing enter would cause it refocus
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
