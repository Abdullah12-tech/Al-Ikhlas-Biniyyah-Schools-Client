import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Activities = () => (
  <div className="space-y-10">
    <Section title="Co-Curricular & Extra-Curricular" subtitle="Developing well-rounded leaders.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Debate & public speaking",
          "STEM club & robotics",
          "Sports and athletics",
          "Arts, music, and drama",
          "Leadership programs",
          "Community service"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Competitions" subtitle="Regional and national recognitions.">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "National Science Fair finalists",
          "Inter-school debate champions",
          "FCT athletics gold medalists",
          "Coding bootcamp awardees"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Activities;
