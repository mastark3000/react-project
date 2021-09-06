import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// import css
import "./App.css";

// import screen
import Home from "./screens/Home/Home";
import HomeInsider from "./screens/Home/HomeInsider/Company";
import Contact from "./screens/Contact/Contact";
import Company from "./screens/Company/Company";
import User from "./screens/User/User";
import PageNotFound from "./screens/PageNotFound/pageNotFound";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* auto redirect from / to /home */}
          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route path="/homeinsider" component={HomeInsider} />
          <Route path="/user" component={User} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
