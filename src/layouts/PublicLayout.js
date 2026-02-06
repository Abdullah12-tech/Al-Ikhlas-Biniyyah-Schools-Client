import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/academics", label: "Academics" },
  { path: "/admissions", label: "Admissions" },
  { path: "/fees", label: "Fees" },
  { path: "/facilities", label: "Facilities" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact" }
];

const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">AI</div>
          <div>
            <p className="text-sm font-semibold text-primary-600">Al-Ikhlas Biniyyah</p>
            <p className="text-xs text-slate-500">Schools</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-primary-600" : "text-slate-600 hover:text-primary-600"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/portal-login"
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:border-primary-300"
          >
            Portal Login
          </Link>
          <Link
            to="/visit"
            className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-700"
          >
            Book a Visit
          </Link>
        </div>
      </div>
    </header>
    <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary-600">Al-Ikhlas Biniyyah Schools</p>
          <p className="text-sm text-slate-500">24 Unity Crescent, Abuja</p>
          <p className="text-sm text-slate-500">+234 812 000 1122</p>
        </div>
        <div className="space-y-2 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">Quick Links</p>
          <Link to="/admissions" className="block hover:text-primary-600">Admissions</Link>
          <Link to="/fees" className="block hover:text-primary-600">Fees</Link>
          <Link to="/careers" className="block hover:text-primary-600">Careers</Link>
        </div>
        <div className="space-y-2 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">Stay Connected</p>
          <p>Facebook · Instagram · LinkedIn</p>
          <p className="text-xs">© 2025 Al-Ikhlas Biniyyah Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);

export default PublicLayout;
