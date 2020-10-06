import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from "./contextAPI/stateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            {/* Header component */}
            <Header />

            {/* Header component end */}
            <div className="app_body">
              {/* sidebar component */}
              <Sidebar />
              {/* sidebar component end */}

              {/* React router -> chat screen */}
              <Switch>
                <Route path="/room/:roomID">
                  <Chat />
                </Route>
                <Route path="/">
                  <h2>welcome</h2>
                </Route>
              </Switch>

              {/* chat screen end */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
