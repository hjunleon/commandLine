import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//import rootReducer from 'redux'
const messageReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
 const store = createStore(messageReducer);
//const Provider = ReactRedux.Provider;
//const connect = ReactRedux.connect;
const mapStateToProps = (state) => {
  return {
    messages: state 
  }
};
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(App)
 /*ReactDOM.render(
   <Provider store={store}>
     <App/>
   </Provider>,
   document.getElementById('root')
 );
ReactDOM.render(<AppWrapper />, document.getElementById('root'));*/
class AppWrapper extends React.Component{
	render(){
		return (
			<Provider store = {store}>
				<Container/ >
			</Provider>
		);
	}
}
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
