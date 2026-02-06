import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { path: "/", label: "Dashboard" },
  { path: "/students", label: "Students" },
  { path: "/staff", label: "Staff" },
  { path: "/classes", label: "Classes" },
  { path: "/attendance", label: "Attendance" },
  { path: "/exams", label: "Exams" },
  { path: "/fees", label: "Fees" },
  { path: "/parents", label: "Parent Portal" },
  { path: "/assignments", label: "Assignments" },
  { path: "/communication", label: "Communication" },
  { path: "/library", label: "Library" },
  { path: "/reports", label: "Reports" },
  { path: "/settings", label: "Settings" }
];

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden w-64 flex-col bg-white p-6 shadow-lg md:flex">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase text-primary-600">SchoolOS</p>
          <h1 className="text-xl font-bold text-slate-900">Al-Ikhlas</h1>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary-50 text-primary-600"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="mt-6 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200"
          type="button"
        >
          Log out
        </button>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div>
            <p className="text-sm text-slate-500">Welcome back</p>
            <h2 className="text-lg font-semibold text-slate-900">{user?.name}</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {user?.role}
            </span>
            <div className="hidden text-sm text-slate-500 md:block">{user?.email}</div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
