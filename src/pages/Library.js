import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";

const books = [
  { id: "BK-01", title: "Essential Mathematics", status: "Available", borrower: "-" },
  { id: "BK-02", title: "Things Fall Apart", status: "Borrowed", borrower: "Amina Yusuf" }
];

const Library = () => {
  const columns = [
    { key: "title", label: "Book" },
    { key: "status", label: "Status" },
    { key: "borrower", label: "Borrower" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <Button size="sm" variant="secondary">
          {row.status === "Borrowed" ? "Return" : "Borrow"}
        </Button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Library Management"
        subtitle="Track books, borrowing history, and fines."
        action={<Button>+ Add Book</Button>}
      />
      <Card title="Books">
        <Table columns={columns} data={books} />
      </Card>
      <Card title="Borrowing History">
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="font-semibold text-slate-800">Amina Yusuf</p>
            <p className="text-xs text-slate-500">Borrowed: Things Fall Apart · Due in 3 days</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="font-semibold text-slate-800">Samuel Okafor</p>
            <p className="text-xs text-slate-500">Returned: Essential Mathematics · Fine ₦500</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Library;
