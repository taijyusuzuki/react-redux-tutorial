import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { store } from "./app/store";
import { Provider } from 'react-redux';

/**
 * Main(index) Component
 *
 * @return {JSX.Element}
 */
const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
