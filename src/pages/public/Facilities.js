import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const facilities = [
  "Modern classrooms",
  "Science laboratories",
  "ICT lab",
  "Library & reading hubs",
  "Sports facilities",
  "Cafeteria",
  "Transport system",
  "Security monitoring",
  "School clinic"
];

const Facilities = () => (
  <div className="space-y-10">
    <Section title="Facilities" subtitle="Safe, modern, and student-centered spaces.">
      <div className="grid gap-4 md:grid-cols-3">
        {facilities.map((item) => (
          <Card key={item}>
            <div className="h-28 rounded-xl bg-slate-100" />
            <p className="mt-3 text-sm font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Facilities;
