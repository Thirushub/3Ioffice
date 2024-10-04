import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function callbackFunction(childData) {
    setLoggedIn(childData);
  }

  return (
    <Router>
      <nav>
        {loggedIn && (
          <>
            <Link to="/home"><button className="button">Home</button></Link>
            <Link to="/about"><button className="button">About</button></Link>
            <Link to="/contact"><button className="button">Contact</button></Link>
            <Link to="/dashboard"><button className="button">Dashboard</button></Link>
          </>
        )}
        {!loggedIn && (
          <Link to="/"><button className="button">Login</button></Link>
        )}
      </nav>

      <Routes>
        {/* Redirect to Dashboard if logged in */}
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />

        {/* Redirect to Dashboard if trying to access root while logged in */}
        <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Form parentCallback={callbackFunction} />} />

        {/* Public Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
