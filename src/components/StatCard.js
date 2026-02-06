import React from "react";

const StatCard = ({ label, value, change, icon }) => (
  <div className="rounded-2xl bg-white p-5 shadow-card">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <h3 className="text-2xl font-semibold text-slate-900">{value}</h3>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        {icon}
      </div>
    </div>
    <p className="mt-3 text-xs text-emerald-600">{change}</p>
  </div>
);

export default StatCard;
