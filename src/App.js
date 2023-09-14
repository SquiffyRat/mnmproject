import './App.css';
import HomePage from './page/HomePage';
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LENGTH': {
      return action.data;
    }
    case 'VOLUME': {
      return action.data;
    }
    case 'MASS': {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  return <div></div>;
}

export default App;
