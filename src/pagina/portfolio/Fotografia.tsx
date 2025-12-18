import MediaGallery from "@/components/MediaGallry.tsx/MediaGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PortfolioFotografia = () => {
  return (
    <ScrollReveal direction="up">
      <MediaGallery category="FOTOGRAFIA" />
    </ScrollReveal>
  );
};

export default PortfolioFotografia;
