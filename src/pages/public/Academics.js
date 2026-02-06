import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const programs = [
  {
    level: "Nursery",
    subjects: ["Phonics", "Numeracy", "Creative play", "Social skills"]
  },
  {
    level: "Primary",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "ICT"]
  },
  {
    level: "Junior Secondary",
    subjects: ["Basic Science", "Business Studies", "Agric", "French", "Civic Education"]
  },
  {
    level: "Senior Secondary",
    subjects: ["Physics", "Chemistry", "Biology", "Economics", "Literature", "ICT"]
  }
];

const Academics = () => (
  <div className="space-y-10">
    <Section title="Academic Programs" subtitle="Structured learning for every stage.">
      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <Card key={program.level}>
            <p className="text-lg font-semibold text-slate-900">{program.level}</p>
            <p className="text-sm text-slate-500">Subjects offered</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {program.subjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Curriculum & approach" subtitle="Balanced Nigerian and international standards.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Nigerian curriculum with British enrichment",
          "Project-based learning and inquiry",
          "Continuous assessment and termly exams"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Academics;
