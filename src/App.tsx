import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Vértice Sistemas marketing homepage: a single-page layout composed of
// modular, self-contained sections (see src/components/).
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
