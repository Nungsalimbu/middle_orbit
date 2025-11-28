"use client";

import { useState } from "react";

const initial = {
  fullName: "",
  passport: "",
  country: "United Arab Emirates",
  jobRole: "",
  email: "",
  phone: ""
};

 export function ApplicationForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border border-cloud bg-white p-6 shadow-glow">
      <div className="grid gap-3 md:grid-cols-2">
        <input name="fullName" value={form.fullName} onChange={update} placeholder="Full name" required className="rounded-2xl border border-cloud px-4 py-3" />
        <input name="passport" value={form.passport} onChange={update} placeholder="Passport number" required className="rounded-2xl border border-cloud px-4 py-3" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <select name="country" value={form.country} onChange={update} className="rounded-2xl border border-cloud px-4 py-3">
          <option>United Arab Emirates</option>
          <option>Qatar</option>
          <option>Saudi Arabia</option>
          <option>Japan</option>
        </select>
        <input name="jobRole" value={form.jobRole} onChange={update} placeholder="Desired job role" className="rounded-2xl border border-cloud px-4 py-3" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input type="email" name="email" value={form.email} onChange={update} placeholder="Email" required className="rounded-2xl border border-cloud px-4 py-3" />
        <input name="phone" value={form.phone} onChange={update} placeholder="Phone / WhatsApp" required className="rounded-2xl border border-cloud px-4 py-3" />
      </div>
      <button className="rounded-full bg-orbit px-5 py-3 text-sm font-semibold text-midnight">Submit application</button>
      {submitted && <p className="text-sm text-emerald-600">Application received. Check your email for portal access.</p>}
    </form>
  );
}

