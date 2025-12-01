"use client";

import { useState } from "react";

const initial = {
  fullName: "",
  passport: "",
  country: "United Arab Emirates",
  jobRole: "",
  email: "",
  phone: "",
  cvFile: null as File | null,
  passportFile: null as File | null
};

interface ApplicationFormProps {
  prefilledJob?: string;
  prefilledCountry?: string;
}

export function ApplicationForm({ prefilledJob, prefilledCountry }: ApplicationFormProps) {
  const [form, setForm] = useState({
    ...initial,
    country: prefilledCountry || initial.country,
    jobRole: prefilledJob || initial.jobRole
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, [event.target.name]: file }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
    setForm(initial);

    // Reset file inputs
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = "";
    });
  };

  if (submitted) {
    return (
      <div className="space-y-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-emerald-900">Application Submitted!</h3>
        <p className="text-emerald-700">
          Thank you for applying{prefilledJob && ` for ${prefilledJob}`}. Check your email for portal access and next steps. Our team will
          contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Submit another application
        </button>
      </div>
    );
  }

  // Show job context if applying for specific job
  const isJobSpecific = prefilledJob && prefilledCountry;

  return (
    <form onSubmit={submit} className="space-y-6">
      {isJobSpecific && (
        <div className="rounded-2xl bg-blue-50 p-4 border border-blue-200">
          <p className="text-sm font-medium text-blue-900">
            Applying for: <span className="font-bold">{prefilledJob}</span> in {prefilledCountry}
          </p>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-midnight/70">
          Personal Information
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={update}
              placeholder="Enter your full name"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Passport Number <span className="text-red-500">*</span>
            </label>
            <input
              name="passport"
              value={form.passport}
              onChange={update}
              placeholder="Enter passport number"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
            />
          </div>
        </div>
      </div>

      {!isJobSpecific && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-midnight/70">
            Job Preferences
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-midnight">
                Preferred Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={form.country}
                onChange={update}
                className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
              >
                <option>United Arab Emirates</option>
                <option>Qatar</option>
                <option>Saudi Arabia</option>
                <option>Kuwait</option>
                <option>Oman</option>
                <option>Japan</option>
                <option>Malaysia</option>
                <option>Singapore</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-midnight">
                Desired Job Role
              </label>
              <input
                name="jobRole"
                value={form.jobRole}
                onChange={update}
                placeholder="e.g., Construction Worker, Nurse"
                className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-midnight/70">
          Contact Information
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="your.email@example.com"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="+977 98XXXXXXXX"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 focus:border-orbit focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-midnight/70">
          Required Documents
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Upload CV/Resume <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="cvFile"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 text-sm focus:border-orbit focus:outline-none"
            />
            <p className="mt-1 text-xs text-slate-500">PDF, DOC, or DOCX (Max 5MB)</p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-midnight">
              Upload Passport Copy <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="passportFile"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
              className="w-full rounded-2xl border border-cloud px-4 py-3 text-sm focus:border-orbit focus:outline-none"
            />
            <p className="mt-1 text-xs text-slate-500">PDF or Image (Max 5MB)</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
        <svg
          className="h-5 w-5 flex-shrink-0 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-blue-900">
          Your information is secure and will only be used for recruitment purposes. We comply with
          all data protection regulations.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-orbit px-6 py-4 text-base font-semibold text-midnight hover:bg-orbit/90 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
