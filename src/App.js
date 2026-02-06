import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
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
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Management from "./pages/public/Management";
import Academics from "./pages/public/Academics";
import Admissions from "./pages/public/Admissions";
import FeesPublic from "./pages/public/FeesPublic";
import Facilities from "./pages/public/Facilities";
import Curriculum from "./pages/public/Curriculum";
import Activities from "./pages/public/Activities";
import ResultsAchievements from "./pages/public/ResultsAchievements";
import Gallery from "./pages/public/Gallery";
import NewsEvents from "./pages/public/NewsEvents";
import Testimonials from "./pages/public/Testimonials";
import Alumni from "./pages/public/Alumni";
import Policies from "./pages/public/Policies";
import Faqs from "./pages/public/Faqs";
import Contact from "./pages/public/Contact";
import Visit from "./pages/public/Visit";
import Application from "./pages/public/Application";
import PortalLogin from "./pages/public/PortalLogin";
import Careers from "./pages/public/Careers";
import PrivacyTerms from "./pages/public/PrivacyTerms";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <DashboardLayout>{children}</DashboardLayout>;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />
      <Route
        path="/management"
        element={
          <PublicLayout>
            <Management />
          </PublicLayout>
        }
      />
      <Route
        path="/academics"
        element={
          <PublicLayout>
            <Academics />
          </PublicLayout>
        }
      />
      <Route
        path="/admissions"
        element={
          <PublicLayout>
            <Admissions />
          </PublicLayout>
        }
      />
      <Route
        path="/fees"
        element={
          <PublicLayout>
            <FeesPublic />
          </PublicLayout>
        }
      />
      <Route
        path="/facilities"
        element={
          <PublicLayout>
            <Facilities />
          </PublicLayout>
        }
      />
      <Route
        path="/curriculum"
        element={
          <PublicLayout>
            <Curriculum />
          </PublicLayout>
        }
      />
      <Route
        path="/activities"
        element={
          <PublicLayout>
            <Activities />
          </PublicLayout>
        }
      />
      <Route
        path="/results"
        element={
          <PublicLayout>
            <ResultsAchievements />
          </PublicLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <PublicLayout>
            <Gallery />
          </PublicLayout>
        }
      />
      <Route
        path="/news"
        element={
          <PublicLayout>
            <NewsEvents />
          </PublicLayout>
        }
      />
      <Route
        path="/testimonials"
        element={
          <PublicLayout>
            <Testimonials />
          </PublicLayout>
        }
      />
      <Route
        path="/alumni"
        element={
          <PublicLayout>
            <Alumni />
          </PublicLayout>
        }
      />
      <Route
        path="/policies"
        element={
          <PublicLayout>
            <Policies />
          </PublicLayout>
        }
      />
      <Route
        path="/faqs"
        element={
          <PublicLayout>
            <Faqs />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route
        path="/visit"
        element={
          <PublicLayout>
            <Visit />
          </PublicLayout>
        }
      />
      <Route
        path="/application"
        element={
          <PublicLayout>
            <Application />
          </PublicLayout>
        }
      />
      <Route
        path="/portal-login"
        element={
          <PublicLayout>
            <PortalLogin />
          </PublicLayout>
        }
      />
      <Route
        path="/careers"
        element={
          <PublicLayout>
            <Careers />
          </PublicLayout>
        }
      />
      <Route
        path="/privacy"
        element={
          <PublicLayout>
            <PrivacyTerms />
          </PublicLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/students"
        element={
          <PrivateRoute>
            <Students />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/students/:id"
        element={
          <PrivateRoute>
            <StudentProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/staff"
        element={
          <PrivateRoute>
            <Staff />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/classes"
        element={
          <PrivateRoute>
            <Classes />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/attendance"
        element={
          <PrivateRoute>
            <Attendance />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/exams"
        element={
          <PrivateRoute>
            <Exams />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/fees"
        element={
          <PrivateRoute>
            <Fees />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/parents"
        element={
          <PrivateRoute>
            <ParentPortal />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/assignments"
        element={
          <PrivateRoute>
            <Assignments />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/communication"
        element={
          <PrivateRoute>
            <Communication />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/library"
        element={
          <PrivateRoute>
            <Library />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/reports"
        element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/settings"
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
