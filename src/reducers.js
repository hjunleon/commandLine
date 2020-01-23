import { combineReducers } from 'redux'
import * as actions from './actions'
const initialState = {

}

function toExec(state = [], action){
  switch(action.type) {
    case actions[0]:
      return [...state,{
        input: action.input,

      }]
    default:
      return state
  }
}

function toHint

function goUp

function goDown

const cmdLine = combineReducers({
  toExec,
  toHint,
  goUp,
  goDown
})


export default cmdLine
