import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const events = [
  { title: "PTA Meeting", date: "Oct 20", detail: "Main hall · 4pm" },
  { title: "Inter-house Sports", date: "Nov 02", detail: "Sports complex" },
  { title: "Cultural Day", date: "Nov 18", detail: "Auditorium" },
  { title: "Mid-term Break", date: "Nov 25", detail: "One week" }
];

const NewsEvents = () => (
  <div className="space-y-10">
    <Section title="News & Events" subtitle="Stay informed about campus activities.">
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.title}>
            <p className="text-xs text-slate-500">{event.date}</p>
            <p className="text-sm font-semibold text-slate-800">{event.title}</p>
            <p className="text-sm text-slate-600">{event.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default NewsEvents;
