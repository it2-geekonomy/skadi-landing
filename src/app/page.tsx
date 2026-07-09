import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissedCalls from "@/components/MissedCalls";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-skadi-bg">
      <Navbar />
      <Hero />
      <Performance />
      <MissedCalls />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
