import React from "react";

const Section = ({ title, subtitle, children, className = "" }) => (
  <section className={`space-y-6 ${className}`}>
    {(title || subtitle) && (
      <div className="space-y-2">
        {title && <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>}
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);

export default Section;
