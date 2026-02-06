import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const stats = [
  { label: "Years of excellence", value: "18+" },
  { label: "Graduates placed", value: "2,450" },
  { label: "Awards won", value: "32" },
  { label: "Certified educators", value: "120" }
];

const levels = [
  { title: "Nursery", description: "Early years foundation with play-based learning." },
  { title: "Primary", description: "Strong literacy, numeracy, and values-based growth." },
  { title: "Junior Secondary", description: "Broad curriculum with STEM and arts balance." },
  { title: "Senior Secondary", description: "WAEC/NECO/IGCSE-ready academic rigor." }
];

const Home = () => (
  <div className="space-y-12">
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase text-primary-600">Future-ready learning</p>
          <h1 className="text-4xl font-semibold text-slate-900">
            A calm, high-performing school community built for every learner.
          </h1>
          <p className="text-base text-slate-600">
            Al-Ikhlas Biniyyah Schools is designed for families seeking strong academics, values-based
            education, and a supportive partnership that nurtures confident, curious students.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/application">
              <Button>Apply Now</Button>
            </Link>
            <Link to="/visit">
              <Button variant="secondary">Book a Visit</Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <Card className="bg-primary-600 text-white">
            <p className="text-sm">2024 WAEC Excellence</p>
            <p className="text-2xl font-semibold">96% pass rate</p>
            <p className="text-xs text-primary-100">Top 10 in FCT rankings</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Our commitment</p>
            <p className="text-lg font-semibold">Safe campus, modern classrooms, and caring staff.</p>
          </Card>
        </div>
      </div>
    </Section>

    <Section title="Quick stats" subtitle="Trusted by families across Abuja.">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Academic levels" subtitle="Learning pathways for every stage.">
      <div className="grid gap-4 md:grid-cols-2">
        {levels.map((level) => (
          <Card key={level.title}>
            <p className="text-lg font-semibold text-slate-900">{level.title}</p>
            <p className="text-sm text-slate-500">{level.description}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Why choose us" subtitle="We combine academic excellence with wellbeing. ">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Small class sizes with individualized support.",
          "Integrated STEM, arts, and leadership programs.",
          "Faith-based values and community partnership."
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-600">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Facilities highlights" subtitle="Modern, safe, and inspiring learning spaces.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Smart classrooms and ICT labs",
          "Science and innovation center",
          "Library and reading hubs",
          "Sports complex and courts",
          "Transport and security systems",
          "Healthy cafeteria and clinic"
        ].map((item) => (
          <Card key={item}>
            <p className="text-sm font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Testimonials" subtitle="Hear from parents and alumni.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            name: "Mrs. Adebayo",
            note: "The communication and care we get here is unmatched. My child is thriving."
          },
          {
            name: "Mr. Okoro",
            note: "Excellent teachers and discipline. The academic results speak for themselves."
          },
          {
            name: "Zainab Musa (Alumna)",
            note: "The leadership training prepared me for university life."
          }
        ].map((item) => (
          <Card key={item.name}>
            <p className="text-sm text-slate-500">{item.name}</p>
            <p className="text-sm text-slate-700">{item.note}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Latest news" subtitle="What is happening on campus.">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Science fair showcases 18 student projects", date: "Oct 12" },
          { title: "New robotics lab commissioned", date: "Oct 08" },
          { title: "PTA meeting scheduled for Oct 20", date: "Oct 05" },
          { title: "Inter-house sports day winners announced", date: "Oct 01" }
        ].map((item) => (
          <Card key={item.title}>
            <p className="text-xs text-slate-500">{item.date}</p>
            <p className="text-sm font-semibold text-slate-800">{item.title}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Card className="flex flex-wrap items-center justify-between gap-4 bg-primary-600 text-white">
      <div>
        <p className="text-sm uppercase text-primary-100">Ready to join us?</p>
        <p className="text-xl font-semibold">Begin your child’s journey today.</p>
      </div>
      <div className="flex gap-3">
        <Link to="/application">
          <Button className="bg-white text-primary-600 hover:bg-primary-50">Apply Now</Button>
        </Link>
        <Link to="/visit">
          <Button variant="secondary" className="border-white text-white hover:bg-white/10">
            Book a Visit
          </Button>
        </Link>
      </div>
    </Card>
  </div>
);

export default Home;
