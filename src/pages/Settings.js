import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

const Settings = () => (
  <div className="space-y-6">
    <PageHeader
      title="Settings"
      subtitle="Manage school profile, academic sessions, and security settings."
    />
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="School Profile">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="School name" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Address" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Contact email" />
          <Button variant="secondary">Upload Logo</Button>
        </div>
      </Card>
      <Card title="Academic Session">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Session" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Term" />
          <Button>Save Session</Button>
        </div>
      </Card>
      <Card title="Grading System">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="A (70-100)" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="B (60-69)" />
          <Button variant="secondary">Update Grading</Button>
        </div>
      </Card>
      <Card title="Security">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Change password" type="password" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Confirm password" type="password" />
          <Button>Update Password</Button>
        </div>
      </Card>
    </div>
  </div>
);

export default Settings;
