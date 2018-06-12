import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";


// import the Router component
import history from "./history";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import initial from "./initial";


// import the App component
import App from "./App";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let articles = store.getState().articles;
// create some dummy articles
// store them in an object
// so that we can easily reference each one by its id

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App articles={ articles } />
        </Router>
    </Provider>,
    document.getElementById("root"),
);


