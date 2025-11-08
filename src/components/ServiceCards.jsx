import { Globe, Server, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application",
    desc: "Full-stack OWASP-aligned testing for modern web apps, APIs, and microservices.",
  },
  {
    icon: Server,
    title: "External Network",
    desc: "Perimeter assessment to uncover exposed services, misconfigurations, and weak auth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    desc: "iOS/Android app review, backend API testing, and secure storage validation.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud & Config",
    desc: "Review IAM, storage, and network posture across AWS/GCP/Azure with best practices.",
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900">What we can test</h2>
      <p className="mt-2 max-w-2xl text-gray-600">Choose the scope that fits your environment. Combine multiple areas for broader coverage.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
