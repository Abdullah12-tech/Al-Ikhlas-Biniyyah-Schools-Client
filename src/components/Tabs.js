import React from "react";

const Tabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          active === tab
            ? "bg-primary-600 text-white"
            : "bg-white text-slate-600 hover:bg-slate-100"
        }`}
        type="button"
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
