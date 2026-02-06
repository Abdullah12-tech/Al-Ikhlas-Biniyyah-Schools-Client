import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const About = () => (
  <div className="space-y-10">
    <Section title="About Al-Ikhlas Biniyyah Schools" subtitle="A legacy of faith, excellence, and service.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="text-sm text-slate-500">Our history</p>
          <p className="text-base text-slate-700">
            Founded in 2007, Al-Ikhlas Biniyyah Schools has grown into a multi-campus institution
            known for academic results and strong character development across Abuja.
          </p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Vision & Mission</p>
          <p className="text-base text-slate-700">
            Vision: raise ethical, high-performing leaders. Mission: deliver holistic education
            grounded in faith, innovation, and community partnership.
          </p>
        </Card>
      </div>
    </Section>

    <Section title="Core values" subtitle="What guides every decision we make.">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          "Integrity",
          "Academic excellence",
          "Service",
          "Innovation",
          "Discipline",
          "Compassion",
          "Respect",
          "Leadership"
        ].map((value) => (
          <Card key={value}>
            <p className="text-sm font-semibold text-slate-800">{value}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Founder’s message" subtitle="A note from the proprietors.">
      <Card>
        <p className="text-base text-slate-700">
          “We believe every child can excel when nurtured in the right environment. Our commitment
          is to build a supportive, high-performing school community that partners with families
          to raise confident, values-driven learners.”
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-800">— Hajia Rahma Bello, Proprietor</p>
      </Card>
    </Section>

    <Section title="Accreditation & approvals" subtitle="Trusted and recognized by education bodies.">
      <div className="grid gap-4 md:grid-cols-3">
        {["Federal Ministry of Education", "WAEC accredited center", "NECO approved"].map((item) => (
          <Card key={item}>
            <p className="text-sm font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Campus life" subtitle="A glimpse of everyday learning.">
      <div className="grid gap-4 md:grid-cols-3">
        {["Classroom activities", "Sports day", "Cultural celebrations"].map((item) => (
          <Card key={item}>
            <div className="h-32 rounded-xl bg-slate-100" />
            <p className="mt-3 text-sm text-slate-600">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default About;
