import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const ResultsAchievements = () => (
  <div className="space-y-10">
    <Section title="Results & Achievements" subtitle="Proof of academic excellence.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "WAEC: 96% pass rate (2024)",
          "NECO: 94% pass rate (2024)",
          "Top 3 in FCT STEM competition",
          "Best private school award (2023)"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Alumni success" subtitle="Where our graduates go next.">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "University of Lagos — Medicine",
          "Covenant University — Engineering",
          "University of Abuja — Law",
          "University of Manchester — Economics"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default ResultsAchievements;
