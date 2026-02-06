import React from "react";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import ChartLine from "../components/ChartLine";
import { chartData } from "../data/mockData";

const Reports = () => (
  <div className="space-y-6">
    <PageHeader
      title="Reports & Analytics"
      subtitle="Filter by date, class, or term to generate insights."
    />
    <div className="flex flex-wrap gap-3">
      <input type="date" className="rounded-xl border border-slate-200 px-4 py-2 text-sm" />
      <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
        <option>All Classes</option>
        <option>Primary</option>
        <option>JSS</option>
      </select>
      <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
        <option>Term 1</option>
        <option>Term 2</option>
        <option>Term 3</option>
      </select>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      <Card title="Attendance Report">
        <ChartLine data={chartData.attendanceTrend} label="Attendance" />
      </Card>
      <Card title="Academic Performance">
        <ChartLine data={chartData.performanceTrend} label="Scores" />
      </Card>
      <Card title="Financial Summary">
        <ChartLine data={chartData.paymentTrend} label="Fee Collection" />
      </Card>
    </div>
    <Card title="Summary Table">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Top performing class</p>
          <p className="text-lg font-semibold">JSS 2 - Blue</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Highest attendance</p>
          <p className="text-lg font-semibold">SSS 1 - Gold</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Fee collection rate</p>
          <p className="text-lg font-semibold">82%</p>
        </div>
      </div>
    </Card>
  </div>
);

export default Reports;
