import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialists from "@/components/Specialists";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Specialists />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
