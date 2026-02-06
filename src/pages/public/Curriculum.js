import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Curriculum = () => (
  <div className="space-y-10">
    <Section title="Curriculum & Examination" subtitle="Rigorous, balanced, and exam-ready learning.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-800">Curriculum breakdown</p>
          <p className="text-sm text-slate-600">
            Nigerian curriculum enriched with British literacy and STEM modules, aligned with 21st-century
            competencies.
          </p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Examination preparation</p>
          <p className="text-sm text-slate-600">WAEC, NECO, IGCSE, and SAT prep classes available.</p>
        </Card>
      </div>
    </Section>

    <Section title="Assessment & grading" subtitle="Continuous assessment with clear grading.">
      <div className="grid gap-4 md:grid-cols-3">
        {["Weekly quizzes", "Mid-term projects", "End-of-term exams"].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Academic calendar" subtitle="Planned learning cycles and support programs.">
      <Card>
        <p className="text-sm text-slate-600">
          Three terms per session with holiday clinics, extra lessons, and enrichment workshops.
          Academic support runs weekly for students needing additional attention.
        </p>
      </Card>
    </Section>
  </div>
);

export default Curriculum;
