import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import { useSchool } from "../context/SchoolContext";

const Staff = () => {
  const { staff } = useSchool();
  const [modal, setModal] = useState(false);

  const columns = [
    { key: "name", label: "Staff" },
    { key: "role", label: "Role" },
    {
      key: "subjects",
      label: "Subjects",
      render: (member) => member.subjects.join(", ")
    },
    {
      key: "classes",
      label: "Classes",
      render: (member) => member.classes.join(", ")
    },
    {
      key: "salary",
      label: "Salary",
      render: (member) => `₦${member.salary.toLocaleString()}`
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Staff & Teachers"
        subtitle="Assign teachers to subjects, manage roles and permissions."
        action={<Button onClick={() => setModal(true)}>+ Add Staff</Button>}
      />
      <Card>
        <Table columns={columns} data={staff} />
      </Card>
      <Modal title="Add Staff" open={modal} onClose={() => setModal(false)}>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Role" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Subjects" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Classes" />
          <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Salary" />
          <div className="md:col-span-2 flex justify-end gap-2">
            <Button variant="secondary" type="button" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setModal(false)}>
              Save Staff
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Staff;
