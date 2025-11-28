"use client";

import { useState } from "react";

const initialState = { name: "", company: "", email: "", phone: "", message: "" };

export function InquiryForm({ title = "Send us an inquiry" }: { title?: string }) {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Inquiry</p>
      <h3 className="font-display text-3xl text-midnight">{title}</h3>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="rounded-2xl border border-cloud px-4 py-3"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="rounded-2xl border border-cloud px-4 py-3"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="rounded-2xl border border-cloud px-4 py-3"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone / WhatsApp"
            required
            className="rounded-2xl border border-cloud px-4 py-3"
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the manpower requirement"
          className="rounded-2xl border border-cloud px-4 py-3"
          rows={4}
        />
        <button className="rounded-full bg-midnight px-5 py-3 text-sm font-semibold text-white">Submit securely</button>
        {submitted && <p className="text-sm text-emerald-600">Thank you! Our deployment desk will call within 24h.</p>}
      </form>
    </section>
  );
}

