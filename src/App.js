import React from 'react';
import './App.css';
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js"

function App() {
  return (
  <div className="app">
      {/* Header component */}
      <Header/>

      {/* Header component end */}
      <div className="app_body">


        {/* sidebar component */}
        <Sidebar/>
        {/* sidebar component end */}

        {/* React router -> chat screen */}
        {/* chat screen end */}
      </div>
    </div>
  );
}

export default App;
