import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const policies = [
  "Student code of conduct",
  "Anti-bullying policy",
  "Attendance policy",
  "Discipline policy",
  "Child protection policy",
  "Safety policy"
];

const Policies = () => (
  <div className="space-y-10">
    <Section title="Code of Conduct & Policies" subtitle="A safe, respectful learning environment.">
      <div className="grid gap-4 md:grid-cols-2">
        {policies.map((policy) => (
          <Card key={policy}>
            <p className="text-sm font-semibold text-slate-800">{policy}</p>
            <p className="text-xs text-slate-500">Read full policy document on request.</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Policies;
