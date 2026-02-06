import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Admissions = () => (
  <div className="space-y-10">
    <Section title="Admissions" subtitle="Clear steps. Supportive guidance.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-800">Admission requirements</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Completed application form</li>
            <li>Birth certificate</li>
            <li>Two passport photographs</li>
            <li>Previous school report (if applicable)</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Entry points & age guide</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Nursery: 2-4 years</li>
            <li>Primary 1: 5-6 years</li>
            <li>JSS 1: 10-11 years</li>
            <li>SSS 1: 13-14 years</li>
          </ul>
        </Card>
      </div>
    </Section>

    <Section title="Admission process" subtitle="Simple steps to enrollment.">
      <div className="grid gap-4 md:grid-cols-4">
        {["Online application", "Entrance assessment", "Interview & review", "Offer & enrollment"].map((step, index) => (
          <Card key={step}>
            <p className="text-xs text-slate-500">Step {index + 1}</p>
            <p className="text-sm font-semibold text-slate-800">{step}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Transfer students" subtitle="We welcome mid-session transfers.">
      <Card>
        <p className="text-sm text-slate-600">
          Transfer applicants should provide a recent academic transcript and a recommendation letter
          from their previous school. Placement tests are scheduled within 7 days of application.
        </p>
      </Card>
    </Section>

    <Card className="flex flex-wrap items-center justify-between gap-4 bg-primary-600 text-white">
      <div>
        <p className="text-sm uppercase text-primary-100">Ready to begin?</p>
        <p className="text-xl font-semibold">Start your application online.</p>
      </div>
      <Link to="/application">
        <Button className="bg-white text-primary-600 hover:bg-primary-50">Online Application</Button>
      </Link>
    </Card>
  </div>
);

export default Admissions;
