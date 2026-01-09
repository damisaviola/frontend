import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardKios from "./pages/DashboardKios";
import Profile from "./pages/Profile";
import Osint from "./pages/Osint";
import NotFound from "./pages/NotFound404";
import Produk from "./pages/Produk";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/osint" element={<Osint />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard-kios"
        element={
          <ProtectedRoute>
            <DashboardKios />
          </ProtectedRoute>
        }
      />
      
      <Route
      path="/produk"
      element={
        <ProtectedRoute>
          <Produk />
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

      {/* 404 */}
      <Route path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;
