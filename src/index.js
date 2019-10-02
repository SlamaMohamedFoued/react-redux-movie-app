import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDescriptionComp from "./Components/MovieDescription/MovieDescriptionComp";

const Routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/movieDescription/:id" component={MovieDescriptionComp} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
