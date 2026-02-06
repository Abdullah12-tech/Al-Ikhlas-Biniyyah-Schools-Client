import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const leadership = [
  { name: "Hajia Rahma Bello", role: "Proprietor", bio: "15 years in education leadership." },
  { name: "Mr. Daniel Obi", role: "Principal", bio: "Former WAEC examiner and STEM advocate." },
  { name: "Mrs. Tola Akin", role: "Vice Principal", bio: "Curriculum specialist, 12 years experience." },
  { name: "Dr. Gloria Ibe", role: "Head of Academics", bio: "PhD in Education, learning design expert." }
];

const departments = [
  "Sciences",
  "Humanities",
  "Arts",
  "Technology",
  "Student Affairs",
  "Guidance & Counseling"
];

const Management = () => (
  <div className="space-y-10">
    <Section title="Management & Staff" subtitle="The people guiding our school community.">
      <div className="grid gap-4 md:grid-cols-2">
        {leadership.map((member) => (
          <Card key={member.name}>
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-slate-100" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs text-primary-600">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Heads of department" subtitle="Experienced leaders in every learning area.">
      <div className="grid gap-4 md:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept}>
            <p className="text-sm font-semibold text-slate-800">{dept}</p>
            <p className="text-xs text-slate-500">10+ years average experience</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Management;
