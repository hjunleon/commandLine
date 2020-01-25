import { combineReducers } from 'redux'
import {PROCESS_CMD, PREV_CMD, NEXT_CMD, AUTOCOM_CMD, REFOCUS} from './actions'

const cmds = ['ls', 'echo' ,'mkdir' , 'grep', 'man', 'pwd' , 'cd' , 'mv' ,
 'rmdir', 'cat' , 'exit' , 'clear', 'kill', 'sleep']

const initState = {
  cmdReply: [],
  curCMD: "",
  curIndex: 0,
  isFocused:true
}

function toExec(state = initState, action){
  //console.log("toExecReducer")
  switch(action.type) {
    case PROCESS_CMD:
      return state
    case NEXT_CMD:
      state.curIndex += 1
      state.curCMD = state.cmdReply[state.curIndex]
      return state
    case PREV_CMD:
      state.curIndex -= 1
      return state.curCMD[state.curIndex]
    case AUTOCOM_CMD:
      //check all commands if have curCMD as a substring
      return state
    /*case actions[4]:
      if (state.isFocused){
        return toExec(state.curCMD, PROCESS_CMD)
      } else {
        return state.isFocused = true
      }*/
    default:
      //console.log(state)
      return state
  }
}

function refocusReducer(state = initState.isFocused, action){
  switch (action.type) {
    case REFOCUS:
      state.isFocused = true
      return state
    default:
      return state
  }
}
const cmdLine = combineReducers({
  toExec,
  refocusReducer
})


export default cmdLine
