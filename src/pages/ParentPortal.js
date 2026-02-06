import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

const ParentPortal = () => (
  <div className="space-y-6">
    <PageHeader
      title="Parent Portal"
      subtitle="View linked students, attendance, fees, and announcements."
      action={<Button>Message Teacher</Button>}
    />
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="Linked Students">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="font-semibold">Amina Yusuf</p>
              <p className="text-xs text-slate-500">JSS 2 - Blue</p>
            </div>
            <Button size="sm" variant="secondary">View</Button>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="font-semibold">Zainab Musa</p>
              <p className="text-xs text-slate-500">Primary 5 - Green</p>
            </div>
            <Button size="sm" variant="secondary">View</Button>
          </div>
        </div>
      </Card>
      <Card title="Announcements">
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="font-semibold text-slate-800">Mid-term break starts Friday</p>
            <p className="text-xs text-slate-500">Please ensure students return on Monday.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="font-semibold text-slate-800">Parent-teacher meeting</p>
            <p className="text-xs text-slate-500">Scheduled for 20th October.</p>
          </div>
        </div>
      </Card>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      <Card title="Attendance">
        <p className="text-sm text-slate-500">Average attendance</p>
        <p className="text-2xl font-semibold text-slate-900">93%</p>
      </Card>
      <Card title="Fee Status">
        <p className="text-sm text-slate-500">Outstanding balance</p>
        <p className="text-2xl font-semibold text-slate-900">₦30,000</p>
      </Card>
      <Card title="Results">
        <p className="text-sm text-slate-500">Latest average score</p>
        <p className="text-2xl font-semibold text-slate-900">82%</p>
      </Card>
    </div>
  </div>
);

export default ParentPortal;
