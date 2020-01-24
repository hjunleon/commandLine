import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
//import rootReducer from 'redux'

 const store = createStore(rootReducer);
 render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//const Provider = ReactRedux.Provider;
//const connect = ReactRedux.connect;
 /*ReactDOM.render(
   <Provider store={store}>
     <App/>
   </Provider>,
   document.getElementById('root')
 );
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
class AppWrapper extends React.Component{
	render(){
		return (
			<Provider store = {store}>
				<Container/ >
			</Provider>
		);
	}
}
ReactDOM.render(<AppWrapper />, document.getElementById('root'));*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
