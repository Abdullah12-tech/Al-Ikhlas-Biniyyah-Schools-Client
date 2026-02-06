import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Gallery = () => (
  <div className="space-y-10">
    <Section title="Gallery" subtitle="Moments from campus life.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Class activities",
          "Events and celebrations",
          "Sports day",
          "Cultural day",
          "Excursions",
          "Graduation ceremonies"
        ].map((item) => (
          <Card key={item}>
            <div className="h-32 rounded-xl bg-slate-100" />
            <p className="mt-3 text-sm text-slate-600">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Gallery;
