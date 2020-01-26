import React from 'react';
import logo from '../logo.svg';
import '../App.css';
//import {cmdInputConnect,cmdBodyConnect, presentationalConnect} from '../Container/container'
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
    this.state = {
      curCMD: this.props.curCMD,
      isFocused: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleUnfocus = this.handleUnfocus.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

    console.log("CmdItem");
    console.log(this.props.isFocused)
  }
  handleChange(event) {
    console.log(event.keyCode)
    this.setState({
      curCMD: event.target.value
    })
  } // if not focused on input, then pressing enter would cause it refocus
  handleFocus(){
    // toggle the cursor blinking based on this state
    this.state.isFocused = true
    console.log(this.state)
  }
  handleUnfocus(){
  //  this.props.toUnfocus();
    this.state.isFocused = false

  }
  handleKeyPress(e){
    if(e.keyCode == 9 || e.which == 9){
      // by right state should be focused but leave here for debug reasons
      // onFocus = {this.handleFocus} onBlur = {this.handleUnfocus}
      if(this.props.isFocused == true){
        this.props.actions.sendForExec(this.props.curCMD)
        this.setState({
          curCMD: ''
        })
      }
    } else if(e.keyCode == 13 || e.which == 13){
      if(this.props.isFocused == true){
        this.props.actions.sendForExec(this.props.curCMD)
        this.setState({
          curCMD: ''
        })
      }
    }
  }
  render(){
    return(
          <div>[user@server ~]$
            <input id="userInput" value = {this.state.curCMD} onChange = {this.handleChange}onKeyUp = {this.handleKeyPress}
             onFocus = {this.handleFocus} onBlur = {this.handleUnfocus} />
          </div>
    );
  }
}
class CmdLineBody extends React.Component{
  constructor(props) {
    super(props)
    console.log("Body");
    console.log(this.props)
    let {body, ...actss} = this.props.prop
    this.body = body
    this.acts = actss
  }
  render(){
    return(
        <div>
            {this.body.toExec.cmdReply.map(x=>(<CmdReplies cmdReplies={x}/>))}
            <CmdItem actions = {this.acts} curCMD = {this.body.toExec.curCMD} isFocused = {this.body.toExec.isFocused}/>
        </div>
    );
  }
}
//difference between react func and class?
class Presentational extends React.Component{

  constructor(props) {
    super(props)
    this.onEnter = this.onEnter.bind(this)
    console.log("Presentational");
    console.log(this.props)
  }
  onEnter(event) {

    if(event.keyCode == 13 || event.which == 13){

      if(this.props.refocusReducer != true){
        this.props.refocus()
      }
    }

  } // if not focused on input, then pressing enter would cause it refocus
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div id="cmdWindow" onKeyUp = {this.onEnter}>
          <CmdLineStart />
          <CmdLineBody prop = {this.props} />
        </div>
      </header>
    </div>
  );
}
}

export {Presentational, CmdItem,CmdLineBody};
