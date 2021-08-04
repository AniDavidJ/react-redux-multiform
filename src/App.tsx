import React from 'react';
import User from './pages/User';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from './pages/User/Success';

const App: React.FC = () => {
  return (
    <div>
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>

      <Route path="/home" exact component={User} />
      <Route path="/success" component={Success} />

      </Switch>
      </Router>

    </div>
  );
}

export default App;
