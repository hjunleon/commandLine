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
  handleKeyPress(e){

      //console.log(this.state)
      //console.log(this.props)
    if(e.keyCode == 9 || e.which == 9){
      // by right state should be focused but leave here for debug reasons

      if(this.state.isFocused == true){
        this.props.sendForExec(this.state.curCMD)
        this.setState({
          curCMD: ''
        })
      } else {
        this.props.refocus()
      }
    } else if(e.keyCode == 13 || e.which == 13){
      if(this.state.isFocused == true){
        this.props.sendForExec(this.props.curCMD)
        this.setState({
          curCMD: ''
        })
      }
    }
  }
  render(){
    console.log("CmdItem")
    console.log(this.props)
    return(
          <div>[user@server ~]$
            <input value = {this.props.curCMD} onChange = {this.handleChange} onFocus = {this.handleFocus} onBlur = {this.handleUnfocus} onKeyUp = {this.handleKeyPress} />
          </div>
    );
  }
}
class CmdLineBody extends React.Component{

  render(){
    return(
        <div>
            { console.log("CmdLineBody"),
            console.log(this.props),
              this.props.allCmdReplies.map(x=>(

              <CmdReplies cmdReplies={x}/>
            ))}
            <CmdItem /*curCMD = {""}*//>
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

      if(this.props.isFocused != true){
        this.props.refocus()
      }
    }

  } // if not focused on input, then pressing enter would cause it refocus
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div id="cmdWindow" onKeyUp = {this.onEnter}>
          <CmdLineStart/ >
          <CmdLineBody   />
        </div>
      </header>
    </div>
  );
}
}

export {Presentational, CmdItem,CmdLineBody};
