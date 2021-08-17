import React from "react";
import User from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./pages/User/Success";
const NotFound = () =>
  <div >
    <h3>404 page not found</h3><br/>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
const App: React.FC = () => {
    
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" exact component={User} />
                    <Route path="/success" component={Success} />
                    <Route path="" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
