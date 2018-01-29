import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import info from './data/getData';

const flights = (state = info, action) => {
  if (action.type === 'changeStore') {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state.flights;
};

// const filterOptions = (state = 'KLM') => {
  // console.log(state);
  // if (action.type === 'changeStore') {
  //   return action.payload;
  // }
  // return state;
// };
const filterOption = (state = '', action) => {
  if (action.type === 'setCompanyFilter') {
    return {
      ...state,
      companyName: action.payload,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  flights, filterOption,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

