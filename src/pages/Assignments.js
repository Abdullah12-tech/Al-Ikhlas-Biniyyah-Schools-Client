import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

const Assignments = () => (
  <div className="space-y-6">
    <PageHeader
      title="Assignments & Learning"
      subtitle="Create assignments, track submissions, and grade work." 
      action={<Button>+ New Assignment</Button>}
    />
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="Assignment List">
        <div className="space-y-3">
          {[
            { title: "Algebra worksheet", due: "2 days left", status: "24/30 submitted" },
            { title: "Literature essay", due: "5 days left", status: "18/30 submitted" }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 p-4">
              <p className="font-semibold text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-500">Due: {item.due}</p>
              <p className="text-xs text-slate-500">{item.status}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Create Assignment">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Title" />
          <textarea className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" rows="4" placeholder="Instructions" />
          <div className="flex flex-wrap gap-3">
            <input className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm" type="date" />
            <Button variant="secondary">Upload File</Button>
          </div>
          <Button>Save Assignment</Button>
        </div>
      </Card>
    </div>
  </div>
);

export default Assignments;
