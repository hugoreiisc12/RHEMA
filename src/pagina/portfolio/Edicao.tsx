import MediaGallery from "@/components/MediaGallry.tsx/MediaGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PortfolioEdicao = () => {
  return (
    <ScrollReveal direction="up">
      <MediaGallery category="EDIÇÃO" />
    </ScrollReveal>
  );
};

export default PortfolioEdicao;
