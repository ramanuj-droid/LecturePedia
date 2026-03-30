import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import AuthPage from "./pages/AuthPage";
// (later)
// import Dashboard from "./pages/Dashboard";
// import Course from "./pages/Course";
// import Profile from "./pages/Profile";
// import Admin from "./pages/Admin";

const App = () => {
  // TEMP: replace with real auth later
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>

        {/* Root Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />
          }
        />

        {/* Auth Page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes (later enable) */}
        {/* 
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
        />
        */}

      </Routes>
    </Router>
  );
};

export default App;