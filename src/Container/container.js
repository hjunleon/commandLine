import {connect} from 'react-redux'
import {processCMD, prevCMD, autocomCMD,refocusOnEnter} from '../actions'
import {Presentational,CmdItem,CmdLineBody} from '../Components/Presentational'

const cmds = ['ls', 'echo' ,'mkdir' , 'grep', 'man', 'pwd' , 'cd' , 'mv' ,
 'rmdir', 'cat' , 'exit' , 'clear', 'kill', 'sleep']
/*
const processCommand = (input,action) => {
  //validate if is legit command with a bunch of switch cases; dumb idea, either dict or array
  switch(action){
    case:
  }
  let call = //split at the first space
  if(cmds.indexOf(input) != -1){

  } else {
      return [input,'unsupported command, please check syntax']
  }
}

const autoComplete = (input) => {
  //check whether half typed cmd or if like commands like cd, end up displaying avail options
}

const prevCommand = () => {

}

const nextCommand = () => {


}*/
/*
const cmdInputMSTP = (state) => {
  console.log("cmdInputMSTP")
  console.log(state)
  return {
    curCMD: state.toExec.curCMD, //to keep in the input
    //reply: pcRES[1],  // to append to next line

    isCursorBlinking:  state.toExec.isFocused,//  to tell input to have blinking cursor
  }
};

const cmdInputMDTP = (dispatch) => {
  return {
    sendForAutoCom: (curCMD) => {
      dispatch(autocomCMD(curCMD))
    },
    sendForExec: (curCMD) => {
      dispatch(processCMD(curCMD))
    }
  }
}
*/

const cmdBodyMSTP = (state) => {
  console.log("cmdBodyMSTP")
    console.log(state)
    return {
      allCmdReplies: state.toExec.cmdReply,
      curCMD: state.toExec.curCMD,
      isFocused: state.toExec.isFocused
    }
};

const presentationalMSTP = state => {
  console.log("presentationalMSTP")
  console.log(state)
  return {
    //allCmdReplies: state.toExec.cmdReply,
    //isFocused: state.toExec.isFocused,
    //curIndex: state.toExec.curIndex,
    //curCMD: state.toExec.curCMD
    body: state
  }
}
const presentationalMDTP = (dispatch) => {
  return {
    refocus: () => {
      dispatch(refocusOnEnter())
    },
    sendForAutoCom: (curCMD) => {
      dispatch(autocomCMD(curCMD))
    },
    sendForExec: (curCMD) => {
      dispatch(processCMD(curCMD))
    }
  }
}


const PresentationalConnect = connect(presentationalMSTP,presentationalMDTP)(Presentational)
//const CmdBodyConnect = connect(cmdBodyMSTP,null)(CmdLineBody)
//const cmdInputConnect = connect(cmdInputMSTP,cmdInputMDTP)(CmdItem)
export default PresentationalConnect
