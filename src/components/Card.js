import React from "react";

const Card = ({ title, action, children, className = "" }) => (
  <div className={`rounded-2xl bg-white p-6 shadow-card ${className}`}>
    {(title || action) && (
      <div className="mb-4 flex items-center justify-between">
        {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
        {action}
      </div>
    )}
    {children}
  </div>
);

export default Card;
