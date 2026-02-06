import React from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";

const PrivacyTerms = () => (
  <div className="space-y-10">
    <Section title="Privacy Policy & Terms" subtitle="Your data, protected and respected.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-800">Data usage</p>
          <p className="text-sm text-slate-600">
            We collect student and parent data solely for educational services and compliance. Data
            is secured and never sold.
          </p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Cookies</p>
          <p className="text-sm text-slate-600">Cookies are used for analytics and to improve experience.</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Student data protection</p>
          <p className="text-sm text-slate-600">
            Access is restricted to authorized staff. Parents can request data updates at any time.
          </p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-800">Terms of service</p>
          <p className="text-sm text-slate-600">
            Enrollment is subject to school policies. Fees are payable as scheduled and reviewed annually.
          </p>
        </Card>
      </div>
    </Section>
  </div>
);

export default PrivacyTerms;
