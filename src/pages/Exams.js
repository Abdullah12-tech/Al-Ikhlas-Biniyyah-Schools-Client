import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

const Exams = () => {
  const [scores, setScores] = useState({ ca1: 15, ca2: 17, exam: 60 });
  const total = scores.ca1 + scores.ca2 + scores.exam;
  const grade = total >= 70 ? "A" : total >= 60 ? "B" : total >= 50 ? "C" : "D";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setScores((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Examination & Results"
        subtitle="Enter results, compute grades, and preview printable report cards."
        action={<Button>Publish Results</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Result Entry">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Student name" />
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Subject" />
            <input
              name="ca1"
              type="number"
              value={scores.ca1}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
              placeholder="CA 1"
            />
            <input
              name="ca2"
              type="number"
              value={scores.ca2}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
              placeholder="CA 2"
            />
            <input
              name="exam"
              type="number"
              value={scores.exam}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
              placeholder="Exam"
            />
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Teacher remark" />
          </div>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Total</p>
            <p className="text-2xl font-semibold text-slate-900">{total} ({grade})</p>
          </div>
        </Card>
        <Card title="Result Preview">
          <div className="space-y-4 rounded-2xl border border-dashed border-slate-200 p-4">
            <div>
              <p className="text-sm text-slate-500">Position Ranking</p>
              <p className="text-lg font-semibold text-slate-900">3rd / 28</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Principal's remark</p>
              <p className="text-sm text-slate-700">Excellent performance. Keep it up.</p>
            </div>
            <Button variant="secondary">Print Result</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Exams;
