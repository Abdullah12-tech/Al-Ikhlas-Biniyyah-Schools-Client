import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Alumni = () => (
  <div className="space-y-10">
    <Section title="Alumni" subtitle="Our graduates continue to shine.">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Dr. Amina Yusuf — Pediatrician",
          "Engr. Samuel Okafor — Software Engineer",
          "Fatima Sule — International Relations"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Alumni association" subtitle="Stay connected and give back.">
      <Card>
        <p className="text-sm text-slate-600">
          The Alumni Association supports mentorship, scholarships, and campus development projects.
          Join our quarterly meetups and networking sessions.
        </p>
      </Card>
    </Section>
  </div>
);

export default Alumni;
