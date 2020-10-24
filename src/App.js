import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateStudent from "./Components/CreateStudent";
import EditStudent from "./Components/EditStudent";
import StudentList from "./Components/StudentList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => <CreateStudent {...props} />}
          />

          <Route
            path="/Edit-Student/:id/:name"
            exact={true}
            render={(props) => <EditStudent {...props} />}
          />

          <Route
            path="/Student-List"
            exact={true}
            render={(props) => <StudentList {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
