import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const faqs = [
  { question: "What are the school hours?", answer: "Monday to Friday, 7:30am - 3:30pm." },
  { question: "Do you offer transport?", answer: "Yes, with secure buses on major routes." },
  { question: "Can fees be paid in installments?", answer: "Yes, two installments per term." },
  { question: "What curriculum do you follow?", answer: "Nigerian curriculum with British enrichment." },
  { question: "Is there a hostel?", answer: "Hostel facilities are available for senior students." },
  { question: "What uniforms are required?", answer: "Uniform list is provided upon admission." }
];

const Faqs = () => (
  <div className="space-y-10">
    <Section title="FAQs" subtitle="Answers to common questions.">
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <p className="text-sm font-semibold text-slate-800">{faq.question}</p>
            <p className="text-sm text-slate-600">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

export default Faqs;
