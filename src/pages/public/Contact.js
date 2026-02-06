import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Contact = () => (
  <div className="space-y-10">
    <Section title="Contact Us" subtitle="We are ready to help you.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="text-sm text-slate-500">Address</p>
          <p className="text-base text-slate-700">24 Unity Crescent, Abuja</p>
          <p className="mt-4 text-sm text-slate-500">Phone</p>
          <p className="text-base text-slate-700">+234 812 000 1122</p>
          <p className="mt-4 text-sm text-slate-500">Email</p>
          <p className="text-base text-slate-700">admissions@alikhlas.edu.ng</p>
          <p className="mt-4 text-sm text-slate-500">Office hours</p>
          <p className="text-base text-slate-700">Mon - Fri · 8:00am - 4:00pm</p>
        </Card>
        <Card>
          <form className="space-y-3">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Full name" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" rows="4" placeholder="Message" />
            <Button>Send message</Button>
          </form>
        </Card>
      </div>
    </Section>
    <Card>
      <div className="h-48 rounded-2xl bg-slate-100" />
      <p className="mt-2 text-xs text-slate-500">Google map embed placeholder</p>
    </Card>
  </div>
);

export default Contact;
