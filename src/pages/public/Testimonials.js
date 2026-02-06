import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const reviews = [
  {
    name: "Mrs. Bisi Adewale",
    quote: "The teachers care deeply, and my son’s confidence has soared."
  },
  {
    name: "Mr. Hassan Yusuf",
    quote: "Excellent communication and a safe environment. Highly recommended."
  },
  {
    name: "Mrs. Ifeoma Obi",
    quote: "My daughter’s results improved significantly in just one term."
  }
];

const Testimonials = () => (
  <div className="space-y-10">
    <Section title="Parent Testimonials" subtitle="Families sharing their experience.">
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name}>
            <div className="mb-3 h-12 w-12 rounded-full bg-slate-100" />
            <p className="text-sm text-slate-700">“{review.quote}”</p>
            <p className="mt-3 text-xs font-semibold text-slate-800">{review.name}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Testimonials;
