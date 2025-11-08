import { useState } from "react";
import { Loader2, Send } from "lucide-react";

export default function OrderForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    testType: "Web Application",
    scope: "",
    objectives: "",
    startDate: "",
    nda: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // For now, emulate submission. In a full app, POST to backend endpoint.
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Request received</h2>
        <p className="mt-3 text-gray-600">Well reach out shortly to confirm scope, timeline, and pricing. Check your inbox.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700"
        >
          Submit another request
        </button>
      </section>
    );
  }

  return (
    <section id="request" className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <h2 className="text-2xl font-bold text-gray-900">Request a Penetration Test</h2>
        <p className="mt-2 text-gray-600">Share your details and desired scope. Well respond within one business day.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input
              required
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Jane Doe"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Work email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="jane@company.com"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Acme Inc."
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Type of test</label>
            <select
              name="testType"
              value={form.testType}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>Web Application</option>
              <option>External Network</option>
              <option>Mobile Application</option>
              <option>Cloud Configuration</option>
              <option>Internal Network</option>
              <option>Red Team (Assumed Breach)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Scope (domains, apps, IP ranges)</label>
            <textarea
              required
              name="scope"
              value={form.scope}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="example.com, api.example.com, 203.0.113.0/24"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Objectives / concerns</label>
            <textarea
              name="objectives"
              value={form.objectives}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Compliance, exploitability of known issues, secure SDLC validation, etc."
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Preferred start date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <input
              id="nda"
              type="checkbox"
              name="nda"
              checked={form.nda}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="nda" className="text-sm text-gray-700">
              We require an NDA before sharing details
            </label>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Submitting
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Submit request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
