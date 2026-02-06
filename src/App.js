import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentProfile from "./pages/StudentProfile";
import Staff from "./pages/Staff";
import Classes from "./pages/Classes";
import Attendance from "./pages/Attendance";
import Exams from "./pages/Exams";
import Fees from "./pages/Fees";
import ParentPortal from "./pages/ParentPortal";
import Assignments from "./pages/Assignments";
import Communication from "./pages/Communication";
import Library from "./pages/Library";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <DashboardLayout>{children}</DashboardLayout>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/students"
        element={
          <PrivateRoute>
            <Students />
          </PrivateRoute>
        }
      />
      <Route
        path="/students/:id"
        element={
          <PrivateRoute>
            <StudentProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/staff"
        element={
          <PrivateRoute>
            <Staff />
          </PrivateRoute>
        }
      />
      <Route
        path="/classes"
        element={
          <PrivateRoute>
            <Classes />
          </PrivateRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <PrivateRoute>
            <Attendance />
          </PrivateRoute>
        }
      />
      <Route
        path="/exams"
        element={
          <PrivateRoute>
            <Exams />
          </PrivateRoute>
        }
      />
      <Route
        path="/fees"
        element={
          <PrivateRoute>
            <Fees />
          </PrivateRoute>
        }
      />
      <Route
        path="/parents"
        element={
          <PrivateRoute>
            <ParentPortal />
          </PrivateRoute>
        }
      />
      <Route
        path="/assignments"
        element={
          <PrivateRoute>
            <Assignments />
          </PrivateRoute>
        }
      />
      <Route
        path="/communication"
        element={
          <PrivateRoute>
            <Communication />
          </PrivateRoute>
        }
      />
      <Route
        path="/library"
        element={
          <PrivateRoute>
            <Library />
          </PrivateRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
