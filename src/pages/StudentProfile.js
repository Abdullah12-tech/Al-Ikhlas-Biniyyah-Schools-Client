import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Tabs from "../components/Tabs";
import { useSchool } from "../context/SchoolContext";

const StudentProfile = () => {
  const { id } = useParams();
  const { students } = useSchool();
  const student = students.find((item) => item.id === id) || students[0];
  const [activeTab, setActiveTab] = useState("Personal info");

  return (
    <div className="space-y-6">
      <PageHeader title="Student Profile" subtitle="Detailed student information and performance." />
      <Card>
        <div className="flex flex-wrap items-center gap-6">
          <img src={student.avatar} alt={student.name} className="h-20 w-20 rounded-2xl object-cover" />
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{student.name}</h3>
            <p className="text-sm text-slate-500">Admission No: {student.id}</p>
            <p className="text-sm text-slate-500">{student.class} - {student.arm}</p>
          </div>
          <Badge tone={student.status === "Active" ? "active" : "hold"}>{student.status}</Badge>
        </div>
      </Card>
      <Tabs
        tabs={["Personal info", "Academic info", "Attendance", "Fees", "Results"]}
        active={activeTab}
        onChange={setActiveTab}
      />
      <Card>
        {activeTab === "Personal info" && (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Guardian</p>
              <p className="text-lg font-semibold text-slate-900">{student.guardian}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="text-lg font-semibold text-slate-900">{student.status}</p>
            </div>
          </div>
        )}
        {activeTab === "Academic info" && (
          <div className="space-y-3">
            <p className="text-sm text-slate-500">Academic history</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>2023/2024 - Overall average: 84%</li>
              <li>2022/2023 - Overall average: 80%</li>
            </ul>
          </div>
        )}
        {activeTab === "Attendance" && (
          <div>
            <p className="text-sm text-slate-500">Attendance rate</p>
            <p className="text-2xl font-semibold text-slate-900">{student.attendance}%</p>
          </div>
        )}
        {activeTab === "Fees" && (
          <div>
            <p className="text-sm text-slate-500">Total fees paid</p>
            <p className="text-2xl font-semibold text-slate-900">₦{student.feesPaid.toLocaleString()}</p>
          </div>
        )}
        {activeTab === "Results" && (
          <div className="space-y-2">
            <p className="text-sm text-slate-500">Recent results</p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-700">Mathematics - A</p>
              <p className="text-sm text-slate-700">English - B+</p>
              <p className="text-sm text-slate-700">Science - A-</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default StudentProfile;
