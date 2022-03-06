import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SpliteIntoWords} from "./Lessons 01/01";

const sentense = "Hellow my frends!"
const result = SpliteIntoWords(sentense)
console.log(result[0] === "Hellow")
console.log(result[1] === "my")
console.log(result[2] === "friends")

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
