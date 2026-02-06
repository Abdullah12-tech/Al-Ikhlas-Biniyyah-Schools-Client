import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";

const ledger = [
  { id: "FEE-01", student: "Amina Yusuf", paid: 120000, outstanding: 30000, status: "Partial" },
  { id: "FEE-02", student: "Samuel Okafor", paid: 150000, outstanding: 0, status: "Paid" }
];

const Fees = () => {
  const columns = [
    { key: "student", label: "Student" },
    {
      key: "paid",
      label: "Paid",
      render: (row) => `₦${row.paid.toLocaleString()}`
    },
    {
      key: "outstanding",
      label: "Outstanding",
      render: (row) => `₦${row.outstanding.toLocaleString()}`
    },
    { key: "status", label: "Status" }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fees & Accounting"
        subtitle="Track fee structures, ledgers, and payment history."
        action={
          <div className="flex gap-2">
            <Button variant="secondary">Export</Button>
            <Button>Record Payment</Button>
          </div>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Collected</p>
          <p className="text-2xl font-semibold text-slate-900">₦18.2M</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Outstanding</p>
          <p className="text-2xl font-semibold text-slate-900">₦4.6M</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Partial payments</p>
          <p className="text-2xl font-semibold text-slate-900">127</p>
        </Card>
      </div>
      <Card title="Student Fee Ledger">
        <Table columns={columns} data={ledger} />
      </Card>
      <Card title="Receipt Preview">
        <div className="rounded-2xl border border-dashed border-slate-200 p-4">
          <p className="text-sm text-slate-500">Receipt #2291</p>
          <p className="text-lg font-semibold text-slate-900">Payment from Amina Yusuf</p>
          <p className="text-sm text-slate-500">Amount: ₦50,000 · Term 1</p>
        </div>
      </Card>
    </div>
  );
};

export default Fees;
