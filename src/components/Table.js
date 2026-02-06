import React from "react";

const Table = ({ columns, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full text-left text-sm">
      <thead className="text-xs uppercase text-slate-500">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-4 py-3">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-slate-50">
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-3 text-slate-700">
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
