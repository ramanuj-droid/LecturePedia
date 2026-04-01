import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import CoursePage from "./pages/CoursePage";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Certificate from "./pages/Certificate";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";
import About from "./pages/About";       
import Contact from "./pages/Contact";   

// Auth
import useAuth from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>

        {/* Root Route */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />}
        />

        {/* Public Pages */}
        <Route
          path="/auth"
          element={user ? <Navigate to="/dashboard" /> : <AuthPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CoursePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate/:id"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
};

export default App;
