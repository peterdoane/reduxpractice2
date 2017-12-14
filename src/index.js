import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reverse from './containers/reverse';
import ReverseApp from './reducers/reverse.reducer';
const store = createStore(ReverseApp);


class New extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Reverse />
      </Provider>
    )
  }
}
// 
ReactDOM.render(<New/>, document.getElementById('root'));
registerServiceWorker();
