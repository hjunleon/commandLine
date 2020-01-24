import { combineReducers } from 'redux'
import * as actions from './actions'
const initialState = {

}

function toExec(state = [], action){
  switch(action.type) {
    case actions[0]:

    case actions[1]:
      state.curIndex += 1
      return state.cmdReply[state.curIndex]
    case actions[2]:
      state.curIndex -= 1
      return state.cmdReply[state.curIndex]
    case actions[3]:

    case actions[4]:
      if (state.isFocused){
        return toExec(state.cmdSoFar, PROCESS_CMD)
      } else {
        return state.isFocused = true
      }
    default:
      return state
  }
}


const cmdLine = combineReducers({
  toExec
})


export default cmdLine
