import React from "react";

const variants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  secondary: "bg-white text-slate-700 border border-slate-200 hover:border-primary-300",
  ghost: "text-primary-600 hover:bg-primary-50"
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base"
};

const Button = ({ variant = "primary", size = "md", className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  />
);

export default Button;
