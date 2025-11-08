import { Shield, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1 text-sm text-blue-700 shadow-sm backdrop-blur">
          <Lock className="h-4 w-4" />
          Trusted, ethical security testing
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Order a Professional
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> Penetration Test</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Identify vulnerabilities before attackers do. Our experts deliver actionable findings with clear, prioritized remediation steps.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#request" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Shield className="h-5 w-5" /> Request a Pen Test
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-gray-800 shadow ring-1 ring-gray-200 hover:bg-gray-50">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
