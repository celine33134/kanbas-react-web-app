//
// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// import { Provider } from 'react-redux'; // Import Provider
// import store  from './Kanbas/store'; // Import your Redux store
//
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
//
// root.render(
//     <React.StrictMode>
//         <Provider store={store}> {/* Wrap your app with Provider */}
//             <App />
//         </Provider>
//     </React.StrictMode>
// );
//
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>

                <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();


