import React, {Component} from "react";
import { createLogger } from 'redux-logger';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { createApp } from "../../../src/index.js"; 
import friend from "./model/Friend";
import App from "./container/App";

const app = createApp({
  extraMiddlewares: [createLogger()]
});

app.model("Friends")
.router(
  <Router>
    <Route path="/" component={App}/>
  </Router>
)
.start("#root");