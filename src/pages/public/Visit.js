import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Visit = () => (
  <div className="space-y-10">
    <Section title="Book a Visit" subtitle="Schedule a campus tour with our admissions team.">
      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Phone number" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" type="email" placeholder="Email" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" type="date" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" type="time" />
          <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>Preferred campus</option>
            <option>Abuja Campus</option>
            <option>Kubwa Campus</option>
          </select>
          <div className="md:col-span-2">
            <Button>Confirm booking</Button>
          </div>
        </form>
      </Card>
      <Card>
        <p className="text-sm text-slate-600">
          You will receive a confirmation message within 24 hours. For urgent requests, call our
          admissions line at +234 812 000 1122.
        </p>
      </Card>
    </Section>
  </div>
);

export default Visit;
