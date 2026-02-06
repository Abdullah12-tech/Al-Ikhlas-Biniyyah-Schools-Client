import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const PortalLogin = () => (
  <div className="space-y-10">
    <Section title="Student & Parent Portal" subtitle="Secure access to results, fees, and communication.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-800">Login options</p>
          <div className="mt-4 space-y-3">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Email or ID" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" type="password" placeholder="Password" />
            <div className="flex gap-2">
              <Button className="flex-1">Student Login</Button>
              <Button className="flex-1" variant="secondary">Parent Login</Button>
            </div>
            <p className="text-xs text-primary-600">Forgot password?</p>
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Need help?</p>
          <p className="text-sm text-slate-600">
            Contact the portal support desk or visit the administration office for password recovery.
          </p>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            Support: portal@alikhlas.edu.ng · +234 812 000 2233
          </div>
        </Card>
      </div>
    </Section>
  </div>
);

export default PortalLogin;
