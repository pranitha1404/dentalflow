import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GrowthSection from "../components/GrowthSection";
import ProblemsSection from "../components/ProblemsSection";
import CalendarSection from "../components/CalendarSection";
import GrowthSystem from "../components/GrowthSystem";
import GrowthPlan from "../components/GrowthPlan";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GrowthSection />
      <ProblemsSection />
      <CalendarSection />
      <GrowthSystem />
      <GrowthPlan />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}