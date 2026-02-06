import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import { useSchool } from "../context/SchoolContext";

const Communication = () => {
  const { announcements } = useSchool();
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Communication"
        subtitle="Send announcements, manage notifications, and review messages."
        action={<Button onClick={() => setOpen(true)}>+ New Announcement</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Announcements">
          <div className="space-y-3">
            {announcements.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-100 p-4">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="text-xs text-slate-500">{item.audience} · {item.date}</p>
                <p className="text-sm text-slate-600">{item.message}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Message Inbox">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <div>
                <p className="font-semibold text-slate-800">Samuel Okafor's parent</p>
                <p className="text-xs text-slate-500">Requesting meeting time</p>
              </div>
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">New</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <div>
                <p className="font-semibold text-slate-800">Attendance Office</p>
                <p className="text-xs text-slate-500">Monthly report ready</p>
              </div>
              <span className="text-xs text-slate-400">1 day ago</span>
            </div>
          </div>
        </Card>
      </div>
      <Modal title="Create Announcement" open={open} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Announcement title" />
          <select className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>All Parents</option>
            <option>Teachers</option>
            <option>Students</option>
          </select>
          <textarea className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" rows="4" placeholder="Message" />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Send</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Communication;
