import {connect} from 'react-redux'
import {processCMD, prevCMD} from '../actions'
import Presentational from '../Components/Presentational'

const cmds = ['ls', 'echo' ,'mkdir' , 'grep', 'man', 'pwd' , 'cd' , 'mv' ,
 'rmdir', 'cat' , 'exit' , 'clear', 'kill', 'sleep']

const processCommand = (input) => {
  //validate if is legit command with a bunch of switch cases; dumb idea, either dict or array
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


}
const mapStateToProps = (state) => {
  let pcRES = processCommand(state.curCMD)
  return {
    cmdSoFar: pcRES[0],
    reply: pcRES[1]

  }
};



const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Presentational)
