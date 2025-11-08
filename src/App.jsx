import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import OrderForm from "./components/OrderForm";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 text-gray-900">
      <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold">
            SecureWorks
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#request" className="hover:text-gray-900">Request</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <a href="#request" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">Get a Quote</a>
        </div>
      </header>
      <main>
        <Hero />
        <ServiceCards />
        <OrderForm />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <footer className="border-t border-gray-200 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} SecureWorks • Ethical hacking and security testing
        </div>
      </footer>
    </div>
  );
}

export default App;
