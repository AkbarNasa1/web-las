import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Las Berkah Amanah",

  // other metadata
  description: "Tempat terpercaya dan amanah"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <FAQ />
      <Blog />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
