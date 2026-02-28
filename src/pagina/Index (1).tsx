import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import MediaGallery from "@/components/MediaGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <MediaGallery />
      <Footer />
    </main>
  );
};

export default Index;
