import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Application = () => (
  <div className="space-y-10">
    <Section title="Online Application" subtitle="Complete your student application in minutes.">
      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Student full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" type="date" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Parent/Guardian name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Parent email" />
          <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>Class applying for</option>
            <option>Nursery</option>
            <option>Primary</option>
            <option>JSS</option>
            <option>SSS</option>
          </select>
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Phone number" />
          <div className="md:col-span-2 rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">
            Upload birth certificate and last report (mock upload area)
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <Button>Submit application</Button>
            <span className="text-xs text-slate-500">Application fee: ₦10,000 (mock payment)</span>
          </div>
        </form>
      </Card>
      <Card>
        <p className="text-sm text-slate-600">
          Track your application status via the admissions portal within 48 hours of submission.
        </p>
      </Card>
    </Section>
  </div>
);

export default Application;
