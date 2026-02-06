import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import { useSchool } from "../context/SchoolContext";

const Students = () => {
  const { students } = useSchool();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(null);

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  const columns = [
    {
      key: "name",
      label: "Student",
      render: (student) => (
        <div className="flex items-center gap-3">
          <img src={student.avatar} alt={student.name} className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold text-slate-800">{student.name}</p>
            <p className="text-xs text-slate-500">{student.id}</p>
          </div>
        </div>
      )
    },
    { key: "class", label: "Class" },
    { key: "guardian", label: "Guardian" },
    {
      key: "status",
      label: "Status",
      render: (student) => (
        <Badge tone={student.status === "Active" ? "active" : "hold"}>{student.status}</Badge>
      )
    },
    {
      key: "action",
      label: "Action",
      render: (student) => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => navigate(`/students/${student.id}`)}>
            View
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setModal("edit")}>
            Edit
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Student Management"
        subtitle="Manage student profiles, attendance, fees, and academic history."
        action={
          <Button onClick={() => setModal("add")}>
            + Add Student
          </Button>
        }
      />
      <Card>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm md:w-72"
            placeholder="Search students"
          />
          <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>All Classes</option>
            <option>Primary</option>
            <option>JSS</option>
            <option>SSS</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>Status</option>
            <option>Active</option>
            <option>On hold</option>
          </select>
        </div>
        <Table columns={columns} data={filtered} />
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filtered.length} students</span>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Prev
            </Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
      <Modal title={modal === "add" ? "Add Student" : "Edit Student"} open={!!modal} onClose={() => setModal(null)}>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Admission number" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Class" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Guardian" />
          <div className="md:col-span-2 flex justify-end gap-2">
            <Button variant="secondary" type="button" onClick={() => setModal(null)}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setModal(null)}>
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Students;
