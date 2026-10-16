import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <WhyUs />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

