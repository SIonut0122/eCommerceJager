import React          from 'react';
import ReactDOM       from 'react-dom';
import Main           from './Main';
import store          from './store';
import { Provider   } from 'react-redux';
import { HashRouter } from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <Main />
      </Provider>
      </HashRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
 
