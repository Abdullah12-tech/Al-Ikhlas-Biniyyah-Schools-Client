import React from "react";
import Card from "../components/Card";
import ChartLine from "../components/ChartLine";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { chartData, mockSchoolData } from "../data/mockData";

const activities = [
  { id: 1, title: "New student enrollment", time: "2 hours ago" },
  { id: 2, title: "Attendance marked for JSS 2", time: "4 hours ago" },
  { id: 3, title: "Payment received - Samuel Okafor", time: "Yesterday" }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        subtitle="Track performance, attendance, and fee collection at a glance."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Students" value="1,248" change="+4.6% this term" icon="👩‍🎓" />
        <StatCard label="Teachers" value="86" change="+2 new hires" icon="👨‍🏫" />
        <StatCard label="Parents" value="1,020" change="+5% engagement" icon="👪" />
        <StatCard label="Classes" value="48" change="Full capacity" icon="🏫" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Attendance Trend">
          <ChartLine data={chartData.attendanceTrend} label="Weekly Attendance" />
        </Card>
        <Card title="Fee Collection">
          <ChartLine data={chartData.paymentTrend} label="Payment Progress" />
        </Card>
        <Card title="Performance Snapshot">
          <ChartLine data={chartData.performanceTrend} label="Average Scores" />
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Fee Summary" className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-primary-50 p-4">
              <p className="text-xs text-primary-600">Collected</p>
              <p className="text-xl font-semibold text-slate-900">₦18.2M</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs text-amber-600">Outstanding</p>
              <p className="text-xl font-semibold text-slate-900">₦4.6M</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs text-emerald-600">Collection Rate</p>
              <p className="text-xl font-semibold text-slate-900">82%</p>
            </div>
          </div>
        </Card>
        <Card title="Recent Activities">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{activity.title}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card title="School Snapshot">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Current Session</p>
            <p className="text-lg font-semibold text-slate-900">{mockSchoolData.school.session}</p>
            <p className="text-sm text-slate-500">Term</p>
            <p className="text-lg font-semibold text-slate-900">{mockSchoolData.school.term}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Campus Address</p>
            <p className="text-lg font-semibold text-slate-900">{mockSchoolData.school.address}</p>
            <p className="text-sm text-slate-500">Contact</p>
            <p className="text-lg font-semibold text-slate-900">{mockSchoolData.school.phone}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
