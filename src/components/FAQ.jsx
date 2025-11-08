const faqs = [
  {
    q: "What deliverables do we receive?",
    a: "A detailed report with executive summary, risk ratings, proofs of concept, and prioritized remediation guidance. Optionally, a remediation re-test and validation letter.",
  },
  {
    q: "Are tests safe in production?",
    a: "Yes. We coordinate test windows, exclude risky techniques by default, and follow strict rules of engagement. Disruptive testing is only performed with explicit approval.",
  },
  {
    q: "How is pricing determined?",
    a: "Scope size, complexity, and timelines. Provide domains, IP ranges, user roles, and API docs for accurate estimates.",
  },
  {
    q: "Can you sign an NDA and DPA?",
    a: "Absolutely. We commonly work under NDA and can provide standard DPA terms upon request.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900">
              <span className="mr-2 text-blue-600">Q{i + 1}.</span> {f.q}
            </summary>
            <p className="mt-3 max-w-3xl text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
