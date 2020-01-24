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
class CmdReplies extends React.Component{
  render(){
    return(
          <div>
            <div>[user@server ~]${this.props.cmdReplies[0]}</div>
            <div>{this.props.cmdReplies[1]}</div>
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
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handleChange(event) {
    this.setState({
      curCMD: event.target.value
    });
  } // if not focused on input, then pressing enter would cause it refocus
  handleFocus(){
    // toggle the cursor blinking based on this state
    this.setState({
        isFocused: true
    })
  }
  handleUnfocus(){
  //  this.props.toUnfocus();
    this.setState({
        isFocused: true
    })
  }
  handleKeyPress(){
    if(e.keyCode == 9 || e.which == 9){
      // by right state should be focused but leave here for debug reasons
      if(this.state.isFocused == true){
        this.prop.sendForExec(this.state.curCMD)
        this.setState({
          curCMD: ''
        })
      } else {
        this.prop.refocus()
      }
    }
  }
  render(){
    return(
          <div>[user@server ~]$
            <input value = {this.prop.curCMD} onChange = {this.handleChange} onfocus = {this.handleFocus} onfocusout = {this.handleUnfocus} onkeyup = {this.handleKeyPress} />
          </div>
    );
  }
}
class CmdLineBody extends React.Component{
  render(){
    return(
        <div>
            {this.prop.allCmdReplies.map(x=>(
              <CmdReplies cmdReplies=x/>
            ))}
            <CmdItem />
        </div>
    );
  }
}
//difference between react func and class?
class Presentational() extends React.Component{

  constructor(props) {
    super(props)
    this.onEnter = this.onEnter.bind(this)
  }
  onEnter(event) {
    if(e.keyCode == 13 || e.which == 13){
      if(this.state.isFocused == true){
        this.prop.sendForExec(this.state.curCMD)
        this.setState({
          curCMD: ''
        })
      } else {
        this.prop.refocus()
      }
    }

  } // if not focused on input, then pressing enter would cause it refocus
  return (
    <div className="App">
      <header className="App-header">
        <div id="cmdWindow" onkeyup = {this.onEnter}>
          <CmdLineStart/ >
          <CmdLineBody/ >
        </div>
      </header>
    </div>
  );
}

export default Presentational;
