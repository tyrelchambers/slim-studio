import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
