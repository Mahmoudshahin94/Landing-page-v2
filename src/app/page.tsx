import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GoalsSection from "@/components/sections/GoalsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import LifestyleSection from "@/components/sections/LifestyleSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import IngredientBreakdown from "@/components/sections/IngredientBreakdown";
import KitchenStory from "@/components/sections/KitchenStory";
import QualitySection from "@/components/sections/QualitySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <FeaturesSection />
        <GoalsSection />
        <PartnersSection />
        <LifestyleSection />
        <ProductShowcase />
        <IngredientBreakdown />
        <KitchenStory />
        <QualitySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
