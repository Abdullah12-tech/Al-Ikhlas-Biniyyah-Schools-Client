import React from "react";

const ChartLine = ({ data, label }) => {
  const max = Math.max(...data);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
        <span>{label}</span>
        <span>{data[data.length - 1]}%</span>
      </div>
      <div className="flex items-end gap-2">
        {data.map((value, index) => (
          <div
            key={`${label}-${index}`}
            className="w-full rounded-t-lg bg-primary-100"
            style={{ height: `${(value / max) * 100}px` }}
          >
            <div className="h-full w-full rounded-t-lg bg-primary-500/70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartLine;
