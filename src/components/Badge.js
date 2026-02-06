import React from "react";

const tones = {
  active: "bg-emerald-100 text-emerald-700",
  hold: "bg-amber-100 text-amber-700",
  info: "bg-blue-100 text-blue-700"
};

const Badge = ({ tone = "info", children }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
    {children}
  </span>
);

export default Badge;
