import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const feeStructure = [
  { level: "Nursery", amount: "₦280,000" },
  { level: "Primary", amount: "₦320,000" },
  { level: "Junior Secondary", amount: "₦380,000" },
  { level: "Senior Secondary", amount: "₦420,000" }
];

const FeesPublic = () => (
  <div className="space-y-10">
    <Section title="School Fees" subtitle="Transparent fees with flexible payment options.">
      <div className="grid gap-4 md:grid-cols-2">
        {feeStructure.map((fee) => (
          <Card key={fee.level}>
            <p className="text-sm text-slate-500">{fee.level}</p>
            <p className="text-2xl font-semibold text-slate-900">{fee.amount}</p>
            <p className="text-xs text-slate-500">Per term</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="What fees cover" subtitle="All-inclusive learning support.">
      <div className="grid gap-4 md:grid-cols-3">
        {["Tuition and learning materials", "Digital learning platforms", "Sports and co-curriculars"].map((item) => (
          <Card key={item}>
            <p className="text-sm text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Payment options" subtitle="Flexible installments for families.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-800">Installment policy</p>
          <p className="text-sm text-slate-600">Two installments per term. First payment due at resumption.</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Scholarships</p>
          <p className="text-sm text-slate-600">Merit-based scholarships for top-performing students.</p>
        </Card>
      </div>
    </Section>

    <Card>
      <p className="text-xs text-slate-500">
        Disclaimer: Fees are reviewed annually. Refunds apply only to tuition balances after service delivery
        and are subject to administrative processing.
      </p>
    </Card>
  </div>
);

export default FeesPublic;
