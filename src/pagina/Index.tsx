import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Hero from "@/components/Heroi.tsx/Hero";
import Services from "@/components/Serviços.tsx/Services";
import About from "@/components/sobre.tsx/About";
import MediaGallery from "@/components/MediaGallry.tsx/MediaGallery";
import Footer from "@/components/Footer/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Index = () => {
  return (
    <>
      <ScrollReveal direction="up">
        <Hero />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Services />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <MediaGallery />
      </ScrollReveal>
      <Footer />
    </>
  );
};

export default Index;
