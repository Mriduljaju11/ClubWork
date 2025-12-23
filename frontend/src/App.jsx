import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <div>Authenticated Home</div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  );
}

export default App;
