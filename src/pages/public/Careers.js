import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const positions = [
  { role: "Mathematics Teacher", type: "Full-time", location: "Abuja" },
  { role: "ICT Instructor", type: "Full-time", location: "Kubwa" },
  { role: "School Nurse", type: "Part-time", location: "Abuja" }
];

const Careers = () => (
  <div className="space-y-10">
    <Section title="Careers" subtitle="Join a mission-driven team.">
      <div className="grid gap-4 md:grid-cols-2">
        {positions.map((job) => (
          <Card key={job.role}>
            <p className="text-sm font-semibold text-slate-800">{job.role}</p>
            <p className="text-xs text-slate-500">{job.type} · {job.location}</p>
            <Button size="sm" className="mt-3">Apply</Button>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Work culture" subtitle="Professional growth and staff wellbeing.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Continuous professional development",
          "Collaborative teaching teams",
          "Health and wellness support"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Application form" subtitle="Send your details to our HR team.">
      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" type="email" placeholder="Email" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Role applying for" />
          <div className="md:col-span-2 rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">
            Upload CV (mock upload area)
          </div>
          <Button>Submit application</Button>
        </form>
      </Card>
    </Section>
  </div>
);

export default Careers;
