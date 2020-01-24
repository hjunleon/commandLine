import {connect} from 'react-redux'
import {processCMD, prevCMD} from '../actions'
import Presentational from '../Components/Presentational'

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
const cmdInputMSTP = (state) => {
  return {
    curCMD: '', //to keep in the input
    //reply: pcRES[1],  // to append to next line

    isCursorBlinking:  state.isFocused,//  to tell input to have blinking cursor
  }
};

const cmdInputMDTP = (dispatch) => {
  return {
    sendForAutoCom: (curCMD) => {
      dispatch(autocomCMD(curCMD))
    }
  }
}
/*
const cmdInput = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(processCMD(message))
    }
  }
};*/


const cmdBodyMSTP = (state) => {
  //let pcRES = processCommand(state.curCMD)
  return {
    allCmdReplies: state.cmdReply
  }
};

const presentationalMDTP = (dispatch) => {
  return {
    sendForExec: (curCMD) => {
      dispatch(processCMD(curCMD))
    },
    refocus: () => {
      dispatch(refocusOnEnter())
    }
  }
}

const cmdInputConnect = connect(cmdInputMSTP)(CmdItem)
const cmdBodyConnect = connect(cmdBodyMSTP)(CmdLineBody)
const presentationalConnect = connect(null,presentationalMDTP)(Presentational)
export {cmdInputConnect,cmdBodyConnect, presentationalConnect}
