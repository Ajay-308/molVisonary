import Link from "next/link";
import { ArrowRight, AtomIcon, Beaker, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-emerald-950 text-white">
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AtomIcon className="h-8 w-8 text-emerald-400" />
          <span className="text-2xl font-bold">MolVisonary</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-emerald-300 hover:text-emerald-200 transition"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-emerald-300 hover:text-emerald-200 transition"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-emerald-300 hover:text-emerald-200 transition"
          >
            Contact
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
          >
            <Link href="/Home">Launch App</Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      <main>
        <section className="container mx-auto py-20 flex flex-col items-center text-center">
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="relative z-10 w-64 h-64 mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(52, 211, 153, 0.2)"
                  strokeWidth="2"
                />
                <circle cx="70" cy="70" r="20" fill="rgba(52, 211, 153, 0.7)" />
                <circle
                  cx="130"
                  cy="130"
                  r="20"
                  fill="rgba(52, 211, 153, 0.7)"
                />
                <circle
                  cx="130"
                  cy="70"
                  r="20"
                  fill="rgba(52, 211, 153, 0.7)"
                />
                <circle
                  cx="70"
                  cy="130"
                  r="20"
                  fill="rgba(52, 211, 153, 0.7)"
                />
                <line
                  x1="70"
                  y1="70"
                  x2="130"
                  y2="70"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
                <line
                  x1="130"
                  y1="70"
                  x2="130"
                  y2="130"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
                <line
                  x1="130"
                  y1="130"
                  x2="70"
                  y2="130"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
                <line
                  x1="70"
                  y1="130"
                  x2="70"
                  y2="70"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
                <line
                  x1="70"
                  y1="70"
                  x2="130"
                  y2="130"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
                <line
                  x1="130"
                  y1="70"
                  x2="70"
                  y2="130"
                  stroke="rgba(52, 211, 153, 0.8)"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Visualize Molecular Structures
          </h1>
          <p className="text-xl text-emerald-200 max-w-3xl mb-10">
            Enter any molecule name or formula and instantly see its 3D
            structure, properties, and chemical information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8"
            >
              <Link href="/Home">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-900">
              <div className="bg-emerald-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Molecule Search</h3>
              <p className="text-emerald-200">
                Search for any molecule by name, formula, or structure and get
                instant results.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-900">
              <div className="bg-emerald-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AtomIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">3D Visualization</h3>
              <p className="text-emerald-200">
                Interactive 3D models of molecular structures that you can
                rotate, zoom, and explore.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-900">
              <div className="bg-emerald-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Beaker className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Property Analysis</h3>
              <p className="text-emerald-200">
                Detailed chemical and physical properties for educational and
                research purposes.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to explore molecules?
          </h2>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-10">
            Join thousands of students, researchers, and chemistry enthusiasts
            who use MolVisonary daily.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8"
          >
            <Link href="/Home">
              Launch App <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </main>

      <footer className="border-t border-emerald-900 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <AtomIcon className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">MolVisonary</span>
            </div>
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-emerald-400/60 text-sm">
            © {new Date().getFullYear()} MolVisonary. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
