import React from "react";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { useSchool } from "../context/SchoolContext";

const Classes = () => {
  const { classes, subjects } = useSchool();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Class & Subject Management"
        subtitle="Create classes, manage arms, and assign subjects to teachers."
        action={<Button>+ Create Class</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Classes">
          <div className="space-y-4">
            {classes.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">{item.name} - {item.arm}</p>
                    <p className="text-xs text-slate-500">Capacity {item.enrolled}/{item.capacity}</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                    {Math.round((item.enrolled / item.capacity) * 100)}% filled
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Subjects">
          <div className="space-y-3">
            {subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-800">{subject.name}</p>
                  <p className="text-xs text-slate-500">Teacher: {subject.teachers.join(", ")}</p>
                </div>
                <Button size="sm" variant="secondary">
                  Assign
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Classes;
