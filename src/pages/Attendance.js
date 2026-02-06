import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { useSchool } from "../context/SchoolContext";

const Attendance = () => {
  const { students } = useSchool();
  const [records, setRecords] = useState(
    students.map((student) => ({
      id: student.id,
      name: student.name,
      status: "Present",
      late: false
    }))
  );

  const toggleStatus = (id) => {
    setRecords((prev) =>
      prev.map((record) =>
        record.id === id
          ? { ...record, status: record.status === "Present" ? "Absent" : "Present" }
          : record
      )
    );
  };

  const toggleLate = (id) => {
    setRecords((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, late: !record.late } : record
      )
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Attendance Module"
        subtitle="Take daily attendance and review trends by class or teacher."
        action={<Button>Submit Attendance</Button>}
      />
      <Card title="Daily Attendance">
        <div className="space-y-3">
          {records.map((record) => (
            <div key={record.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 p-4">
              <div>
                <p className="font-semibold text-slate-800">{record.name}</p>
                <p className="text-xs text-slate-500">{record.id}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant={record.status === "Present" ? "primary" : "secondary"} onClick={() => toggleStatus(record.id)}>
                  {record.status}
                </Button>
                <button
                  type="button"
                  onClick={() => toggleLate(record.id)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    record.late ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {record.late ? "Late" : "On time"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Monthly Summary">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs text-emerald-600">Present rate</p>
              <p className="text-xl font-semibold">94%</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs text-amber-600">Late</p>
              <p className="text-xl font-semibold">4%</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-xs text-rose-600">Absent</p>
              <p className="text-xl font-semibold">2%</p>
            </div>
          </div>
        </Card>
        <Card title="Teacher Attendance">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <span>Mr. Arinze</span>
              <span className="text-sm font-semibold text-emerald-600">97%</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <span>Mrs. Sule</span>
              <span className="text-sm font-semibold text-emerald-600">95%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
