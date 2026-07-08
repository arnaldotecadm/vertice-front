import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedEngineering from "./components/TrustedEngineering";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedEngineering />
        <Services />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
